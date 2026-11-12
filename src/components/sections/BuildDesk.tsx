import { useEffect, useId, useRef, useState, type CSSProperties, type FormEvent, type KeyboardEvent, type PointerEvent, type ReactNode } from 'react'
import { buildDeskReveal, stepIn } from '@/animations/buildDeskReveal'
import { ArrowIcon } from '@/components/ui/icons'
import { editorial } from '@/data/editorial'
import { BRANDS, findBrand, OTHER_MODEL, yearsFor, type VehicleBrand } from '@/data/vehicles'
import { PRESELECT_EVENT } from '@/lib/buildBrief'
import { submitBuildRequest, FORM_NAME, type BuildRequest } from '@/lib/buildRequest'
import { useGSAP } from '@/lib/gsap'

const STEPS = ['Select your vehicle', 'Model and year', 'Your details'] as const
type Step = 0 | 1 | 2

/** The quote's service options: Privé Auto's service cards, in this order */
const SERVICE_ORDER = ['wraps', 'protection-finish', 'body-kits', 'bespoke-interiors', 'wheels-suspension']
const SERVICE_OPTIONS = [...editorial.upper, ...editorial.lower]
  .sort((a, b) => SERVICE_ORDER.indexOf(a.id) - SERVICE_ORDER.indexOf(b.id))
  .map((c) => c.title)

type Form = {
  brand: string
  model: string
  modelOther: string
  year: string
  services: string[]
  details: string
  name: string
  email: string
  phone: string
  'bot-field': string
}

const EMPTY: Form = { brand: '', model: '', modelOther: '', year: '', services: [], details: '', name: '', email: '', phone: '', 'bot-field': '' }

type Errors = Partial<Record<keyof Form, string>>

const finalModel = (f: Form) => (f.model === OTHER_MODEL ? f.modelOther.trim() : f.model)

function validateStep(step: Step, f: Form): Errors {
  const e: Errors = {}
  if (step === 0 && !findBrand(f.brand)) e.brand = 'Choose your vehicle’s make.'
  if (step === 1) {
    if (!f.model) e.model = 'Choose the model.'
    else if (f.model === OTHER_MODEL && !f.modelOther.trim()) e.modelOther = 'Enter the model.'
    if (!f.year) e.year = 'Choose the year.'
  }
  if (step === 2) {
    if (!f.name.trim()) e.name = 'Enter your full name.'
    if (!f.email.trim()) e.email = 'Enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = 'Enter a valid email address.'
    const digits = f.phone.replace(/\D/g, '')
    if (!digits) e.phone = 'Enter your phone number.'
    else if (digits.length < 10 || digits.length > 15) e.phone = 'Enter a valid phone number.'
    if (!f.services.length) e.services = 'Choose at least one service.'
  }
  return e
}

/**
 * The quote brief: "Let's talk builds." A three-step vehicle selector in the
 * black editorial panel. 01 a 12-make logo grid (a click chooses and moves
 * on), 02 that make's models and the year, 03 contact details, services
 * (one or more) and notes, with the chosen vehicle shown throughout. Continue
 * validates the step; Back keeps everything. Steps settle in with a short
 * fade. Posts to Netlify Forms (lib/buildRequest.ts). Vehicle data:
 * data/vehicles.ts. Animation hooks: [data-bd-reveal], [data-bd-step].
 */
export function BuildDesk() {
  const scope = useRef<HTMLElement>(null)
  const sheet = useRef<HTMLDivElement>(null)
  const [step, setStep] = useState<Step>(0)
  const [form, setForm] = useState<Form>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  useGSAP(() => buildDeskReveal(), { scope })

  // Other sections can open the brief with a service chosen (lib/buildBrief.ts)
  useEffect(() => {
    const onPreselect = (e: Event) => {
      const service = (e as CustomEvent<string>).detail
      if (SERVICE_OPTIONS.includes(service)) setForm((f) => (f.services.includes(service) ? f : { ...f, services: [...f.services, service] }))
    }
    window.addEventListener(PRESELECT_EVENT, onPreselect)
    return () => window.removeEventListener(PRESELECT_EVENT, onPreselect)
  }, [])

  const brand = findBrand(form.brand)
  const model = brand?.models.find((m) => m.name === form.model)
  const vehicle = [form.year, brand?.name, finalModel(form)].filter(Boolean).join(' ')
  // Beside a logo the make's name would repeat it
  const vehicleShort = brand?.logo ? [form.year, finalModel(form)].filter(Boolean).join(' ') : vehicle

  const set = <K extends keyof Form>(k: K, v: Form[K]) => {
    setForm((f) => ({ ...f, [k]: v }))
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }))
  }

  const focusFirst = (e: Errors) => {
    const first = Object.keys(e)[0]
    if (first) sheet.current?.querySelector<HTMLElement>(`[data-field="${first}"]`)?.focus()
  }

  const goTo = (to: Step) => {
    setStep(to)
    requestAnimationFrame(() => {
      const el = sheet.current
      if (!el) return
      // Focus before the fade: a hidden element can't take focus
      el.querySelector<HTMLElement>('[data-step-focus]')?.focus({ preventScroll: true })
      // Keep the sheet in view when a step is shorter than the last
      if (el.getBoundingClientRect().top < 0) el.scrollIntoView({ block: 'start', behavior: 'auto' })
      stepIn(el)
    })
  }

  const chooseBrand = (id: string) => {
    // A different make starts its model and year afresh
    setForm((f) => (f.brand === id ? f : { ...f, brand: id, model: '', modelOther: '', year: '' }))
    setErrors({})
    goTo(1)
  }

  const advance = () => {
    const e = validateStep(step, form)
    setErrors(e)
    if (Object.keys(e).length) return focusFirst(e)
    goTo((step + 1) as Step)
  }

  const submit = async (ev: FormEvent) => {
    ev.preventDefault()
    if (step < 2) return advance()
    // Earlier steps are re-checked (e.g. after Back) before sending
    for (const s of [0, 1] as const) {
      const e = validateStep(s, form)
      if (Object.keys(e).length) {
        setErrors(e)
        return goTo(s)
      }
    }
    const e = validateStep(2, form)
    setErrors(e)
    if (Object.keys(e).length) return focusFirst(e)
    setStatus('sending')
    const request: BuildRequest = {
      make: brand?.name ?? '',
      model: finalModel(form),
      year: form.year,
      services: form.services.join(', '),
      details: form.details,
      name: form.name,
      email: form.email,
      phone: form.phone,
      'bot-field': form['bot-field'],
    }
    try {
      await submitBuildRequest(request)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const field = (k: keyof Form) => ({
    id: `bd-${k}`,
    name: k,
    'data-field': k,
    'aria-invalid': errors[k] ? true : undefined,
    'aria-describedby': errors[k] ? `bd-${k}-error` : undefined,
  })
  const err = (k: keyof Form) =>
    errors[k] ? (
      <p id={`bd-${k}-error`} className="bd-error">
        {errors[k]}
      </p>
    ) : null

  return (
    <section ref={scope} id="build" aria-labelledby="build-title" className="build-brief">
      <div className="container-site">
        <div className="build-brief__panel">
          <header className="build-brief__intro">
            <p data-bd-reveal className="bd-status">
              <span aria-hidden="true" className="bd-status__dot" />
              PRIVATE REQUESTS
            </p>
            <h2 id="build-title" data-bd-reveal className="brand-headline build-brief__title">
              Make an Enquiry.
            </h2>
          </header>

          <div data-bd-reveal ref={sheet} className="build-brief__sheet">
            {status === 'sent' ? (
              <div className="bd-done" role="status">
                <p className="bd-done__kicker">Request received</p>
                <p className="bd-done__title">Thank you, {form.name.trim().split(/\s+/)[0]}.</p>
                <p className="bd-done__text">We have your {vehicle} and will be in touch with your quote.</p>
              </div>
            ) : (
              <form name={FORM_NAME} noValidate onSubmit={submit} aria-label="Request a quote">
                {/* Honeypot (Netlify): hidden from people and assistive tech */}
                <p className="sr-only" aria-hidden="true">
                  <label>
                    Leave this empty <input name="bot-field" tabIndex={-1} autoComplete="off" value={form['bot-field']} onChange={(e) => set('bot-field', e.target.value)} />
                  </label>
                </p>

                <div className="bd-progress">
                  <ol className="bd-steps" aria-label="Progress">
                    {STEPS.map((title, i) => (
                      <li key={title} className={`bd-steps__item${i === step ? ' is-on' : i < step ? ' is-done' : ''}`} aria-current={i === step ? 'step' : undefined}>
                        <span className="sr-only">{title}</span>
                      </li>
                    ))}
                  </ol>
                  <span aria-hidden="true" className="bd-progress__count">
                    Step {step + 1} of {STEPS.length}
                  </span>
                </div>

                <div data-bd-step className="bd-step">
                  {step === 0 && (
                    <StepHead title={STEPS[0]}>
                      <ul className="vs-grid" aria-label="Vehicle make">
                        {BRANDS.map((b, i) => (
                          <li key={b.id} className="vs-grid__item">
                            <button
                              type="button"
                              className="vs-brand"
                              data-field={i === 0 ? 'brand' : undefined}
                              aria-pressed={form.brand === b.id}
                              onClick={() => chooseBrand(b.id)}
                              onPointerMove={spotlight}
                            >
                              <BrandMark brand={b} />
                              {/* A logo stands alone; its name is for screen readers only */}
                              {b.logo && <span className="sr-only">{b.name}</span>}
                            </button>
                          </li>
                        ))}
                      </ul>
                      {err('brand')}
                    </StepHead>
                  )}

                  {step === 1 && brand && (
                    <StepHead title={STEPS[1]}>
                      {/* The chosen make: its logo alone, or its name until a logo arrives */}
                      <div className="vs-chosen">
                        {brand.logo ? (
                          <span className="vs-chosen__mark" role="img" aria-label={brand.name}>
                            <BrandMark brand={brand} />
                          </span>
                        ) : (
                          <span className="vs-chosen__name">{brand.name}</span>
                        )}
                      </div>
                      <div className="bd-row bd-row--model">
                        <ListSelect
                          label="Model"
                          field="model"
                          placeholder="Select model"
                          options={[...brand.models.map((x) => x.name), OTHER_MODEL]}
                          separateLast
                          value={form.model}
                          error={errors.model}
                          onChange={(v) => {
                            setForm((f) => ({ ...f, model: v, year: yearsFor(brand.models.find((x) => x.name === v)).includes(f.year) ? f.year : '' }))
                            if (errors.model) setErrors((e) => ({ ...e, model: undefined }))
                          }}
                        />
                        <ListSelect label="Year" field="year" placeholder="Select" numeric options={yearsFor(model)} value={form.year} error={errors.year} onChange={(v) => set('year', v)} />
                      </div>
                      {form.model === OTHER_MODEL && (
                        <div className="bd-line vs-other">
                          <label htmlFor="bd-modelOther">Your model</label>
                          <input {...field('modelOther')} autoComplete="off" placeholder={`Your ${brand.name} model`} value={form.modelOther} onChange={(e) => set('modelOther', e.target.value)} />
                          {err('modelOther')}
                        </div>
                      )}
                    </StepHead>
                  )}

                  {step === 2 && brand && (
                    <StepHead title={STEPS[2]}>
                      <div className="vs-summary">
                        {brand.logo && (
                          <span className="vs-summary__mark" role="img" aria-label={brand.name}>
                            <BrandMark brand={brand} />
                          </span>
                        )}
                        <span className="vs-summary__text">
                          <span className="bd-sublabel">Quote for</span>
                          <span className="vs-summary__vehicle">{vehicleShort}</span>
                        </span>
                        <button type="button" className="vs-summary__edit" onClick={() => goTo(1)}>
                          Edit
                        </button>
                      </div>
                      <div className="bd-row bd-row--contact">
                        <div className="bd-line">
                          <label htmlFor="bd-name">Full name</label>
                          <input {...field('name')} autoComplete="name" value={form.name} onChange={(e) => set('name', e.target.value)} />
                          {err('name')}
                        </div>
                        <div className="bd-line">
                          <label htmlFor="bd-email">Email</label>
                          <input {...field('email')} type="email" autoComplete="email" inputMode="email" value={form.email} onChange={(e) => set('email', e.target.value)} />
                          {err('email')}
                        </div>
                        <div className="bd-line">
                          <label htmlFor="bd-phone">Phone</label>
                          <input {...field('phone')} type="tel" autoComplete="tel" inputMode="tel" value={form.phone} onChange={(e) => set('phone', e.target.value)} />
                          {err('phone')}
                        </div>
                      </div>
                      <fieldset className="bd-services vs-services" aria-describedby={errors.services ? 'bd-services-error' : undefined}>
                        <legend className="bd-sublabel">
                          Services <span className="bd-optional">Choose one or more</span>
                        </legend>
                        <ul className="bd-service-list">
                          {SERVICE_OPTIONS.map((s, i) => (
                            <li key={s}>
                              <label className="bd-service bd-service--check">
                                <input
                                  type="checkbox"
                                  name="services"
                                  value={s}
                                  data-field={i === 0 ? 'services' : undefined}
                                  checked={form.services.includes(s)}
                                  onChange={(e) => set('services', e.target.checked ? [...form.services, s] : form.services.filter((x) => x !== s))}
                                />
                                <span className="bd-service__name">{s}</span>
                                <span aria-hidden="true" className="bd-service__mark" />
                              </label>
                            </li>
                          ))}
                        </ul>
                        {err('services')}
                      </fieldset>
                      <div className="bd-line bd-line--area">
                        <label htmlFor="bd-details">
                          Project details <span className="bd-optional">Optional</span>
                        </label>
                        <textarea {...field('details')} rows={3} placeholder="Colours, finishes, references, timing" value={form.details} onChange={(e) => set('details', e.target.value)} />
                      </div>
                    </StepHead>
                  )}
                </div>

                {status === 'error' && (
                  <p className="bd-alert" role="alert">
                    Your request didn’t send. Please try again, or message us on Instagram.
                  </p>
                )}

                {step > 0 && (
                  <div className="bd-submit-row">
                    <button type="button" className="bd-back" onClick={() => goTo((step - 1) as Step)} disabled={status === 'sending'}>
                      <ArrowIcon className="bd-back__icon" />
                      {step === 1 ? 'All makes' : 'Back'}
                    </button>
                    <button type="submit" className="bd-submit" disabled={status === 'sending'} aria-busy={status === 'sending' || undefined}>
                      <span>{step < 2 ? 'Continue' : status === 'sending' ? 'Sending…' : 'Request a Quote'}</span>
                      {status !== 'sending' && <ArrowIcon className="bd-submit__icon" />}
                    </button>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function StepHead({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="bd-part">
      <h3 className="bd-part__head" tabIndex={-1} data-step-focus>
        {title}
      </h3>
      <div className="bd-part__body">{children}</div>
    </div>
  )
}

/** Grid cells: a soft light follows the pointer (--mx, --my) */
function spotlight(e: PointerEvent<HTMLButtonElement>) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

/**
 * A make's logo, fitted inside the same box in every cell (CSS, from the
 * logo's aspect), so wide wordmarks and tall crests read at one size.
 * Without a logo file: the name, set as a typographic placeholder.
 */
function BrandMark({ brand }: { brand: VehicleBrand }) {
  if (!brand.logo) {
    return (
      <span aria-hidden="true" className="vs-mark vs-mark--type">
        {brand.name}
      </span>
    )
  }
  const style = { '--a': brand.aspect ?? 1, '--s': brand.scale ?? 1 } as CSSProperties
  if ('src' in brand.logo) {
    return (
      <span aria-hidden="true" className="vs-mark" style={style}>
        <img src={brand.logo.src} alt="" draggable={false} />
      </span>
    )
  }
  return <span aria-hidden="true" className="vs-mark" style={style} dangerouslySetInnerHTML={{ __html: brand.logo.svg }} />
}

/**
 * Select-only combobox (ARIA APG pattern) in the sheet's style, for model
 * and year: a compact list that fades open; arrows, Home/End, Page Up/Down
 * and typed characters move, Enter/Space choose, Escape/Tab close.
 */
function ListSelect({
  label,
  field,
  placeholder,
  options,
  value,
  error,
  numeric,
  separateLast,
  onChange,
}: {
  label: string
  field: string
  placeholder: string
  options: string[]
  value: string
  error?: string
  numeric?: boolean
  separateLast?: boolean
  onChange: (v: string) => void
}) {
  const id = useId()
  const btn = useRef<HTMLDivElement>(null)
  const list = useRef<HTMLUListElement>(null)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const typed = useRef({ text: '', at: 0 })

  // Keep the active option in view while the list is open
  useEffect(() => {
    if (!open) return
    list.current?.querySelector<HTMLElement>(`[data-i="${active}"]`)?.scrollIntoView({ block: 'nearest' })
  }, [open, active])

  const openList = () => {
    setActive(Math.max(0, options.indexOf(value)))
    setOpen(true)
  }
  const choose = (i: number) => {
    onChange(options[i])
    setOpen(false)
  }

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const move = (to: number) => {
      e.preventDefault()
      if (!open) return openList()
      setActive(Math.max(0, Math.min(options.length - 1, to)))
    }
    if (e.key === 'ArrowDown') move(active + 1)
    else if (e.key === 'ArrowUp') move(active - 1)
    else if (e.key === 'PageDown') move(active + 6)
    else if (e.key === 'PageUp') move(active - 6)
    else if (e.key === 'Home') move(0)
    else if (e.key === 'End') move(options.length - 1)
    else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      if (open) choose(active)
      else openList()
    } else if (e.key === 'Escape') setOpen(false)
    else if (e.key === 'Tab' && open) choose(active)
    else if (e.key.length === 1 && /\S/.test(e.key)) {
      // Type-ahead: "2", "20", "2018" or "u", "ur" jump to the first match
      const now = Date.now()
      const text = (now - typed.current.at < 900 ? typed.current.text : '') + e.key.toLowerCase()
      typed.current = { text, at: now }
      const i = options.findIndex((o) => o.toLowerCase().startsWith(text))
      if (i >= 0) {
        if (!open) setOpen(true)
        setActive(i)
      }
    }
  }

  return (
    <div className={`bd-line bd-yearsel${numeric ? ' bd-line--year' : ''}`}>
      <span className="bd-label" id={`${id}-label`}>
        {label}
      </span>
      <div
        ref={btn}
        id={`bd-${field}`}
        role="combobox"
        tabIndex={0}
        data-field={field}
        aria-labelledby={`${id}-label ${id}-value`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-list`}
        aria-activedescendant={open ? `${id}-o-${active}` : undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `bd-${field}-error` : undefined}
        className="bd-yearsel__button"
        data-empty={!value || undefined}
        onClick={() => (open ? setOpen(false) : openList())}
        onKeyDown={onKey}
        onBlur={(e) => {
          if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) setOpen(false)
        }}
      >
        <span id={`${id}-value`} className="bd-yearsel__value">
          {value || placeholder}
        </span>
        <span aria-hidden="true" className="bd-yearsel__chevron" />
      </div>
      <ul ref={list} id={`${id}-list`} role="listbox" aria-labelledby={`${id}-label`} className="bd-yearsel__list" data-open={open || undefined}>
        {options.map((o, i) => (
          <li
            key={o}
            id={`${id}-o-${i}`}
            data-i={i}
            role="option"
            aria-selected={o === value}
            className={`bd-yearsel__opt${numeric ? ' bd-yearsel__opt--num' : ''}${i === active ? ' is-active' : ''}${separateLast && i === options.length - 1 ? ' bd-yearsel__opt--other' : ''}`}
            onMouseDown={(e) => {
              e.preventDefault()
              choose(i)
              btn.current?.focus()
            }}
            onMouseMove={() => setActive(i)}
          >
            {o}
          </li>
        ))}
      </ul>
      {error && (
        <p id={`bd-${field}-error`} className="bd-error">
          {error}
        </p>
      )}
    </div>
  )
}
