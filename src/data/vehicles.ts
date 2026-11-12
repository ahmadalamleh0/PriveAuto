import astonMartinImage from '@/assets/brands/aston-martin.png'
import audiLogo from '@/assets/brands/audi.svg?raw'
import bentleyImage from '@/assets/brands/bentley.png'
import bmwLogo from '@/assets/brands/bmw.svg?raw'
import bugattiImage from '@/assets/brands/bugatti.png'
import ferrariLogo from '@/assets/brands/ferrari.svg?raw'
import lamborghiniLogo from '@/assets/brands/lamborghini.svg?raw'
import mclarenLogo from '@/assets/brands/mclaren.svg?raw'
import mercedesLogo from '@/assets/brands/mercedes-benz.svg?raw'
import porscheLogo from '@/assets/brands/porsche.svg?raw'
import rangeRoverImage from '@/assets/brands/range-rover.png'
import rollsRoyceImage from '@/assets/brands/rolls-royce.png'

/**
 * Vehicle selector data for the quote brief: the 12 manufacturers shown in
 * the brand grid, in grid order, each with its own models. These are vehicle
 * options for the customer, not claims of partnership or affiliation.
 *
 * Logos (src/assets/brands):
 * - SVGs (the client's /SVG folder; Ferrari from the studio's Downloads),
 *   cleaned for the web: fills removed so they take the text colour, each
 *   viewBox cropped to the drawing so marks fit one box consistently.
 * - Rolls-Royce, Bentley, Aston Martin, Bugatti and Range Rover: the client's
 *   images (2026-11-12), converted to paper-white PNGs on transparency and
 *   trimmed; Aston Martin keeps its green banner.
 * A brand with `logo: null` shows its name as a typographic placeholder. To
 * add a logo: import a cleaned SVG `?raw` as { svg }, or a white PNG as
 * { src }, and set its `aspect` (width / height of the cropped artwork).
 *
 * Models: a few current and recent ones per brand; the form always adds
 * "Other / Not listed". `years` is optional per model ([first, last]);
 * without it the year list runs from next model year back to OLDEST_YEAR.
 */

export type VehicleModel = { name: string; years?: [number, number] }

export type VehicleBrand = {
  id: string
  name: string
  /** An SVG (inline markup, takes the text colour) or an image already in
   *  paper white; null until the logo file is supplied */
  logo: { svg: string } | { src: string } | null
  /** Width / height of the logo (cropped viewBox, or trimmed image) */
  aspect?: number
  /** Optical trim for a mark that reads heavier or lighter than the rest (1 = none) */
  scale?: number
  models: VehicleModel[]
}

export const OTHER_MODEL = 'Other / Not listed'
export const OLDEST_YEAR = 1990

const m = (...names: string[]): VehicleModel[] => names.map((name) => ({ name }))

export const BRANDS: VehicleBrand[] = [
  {
    id: 'ferrari',
    name: 'Ferrari',
    logo: { svg: ferrariLogo },
    aspect: 0.705,
    models: m('12Cilindri', '296 GTB', '296 GTS', 'SF90 Stradale', 'SF90 Spider', 'Purosangue', 'Roma', 'Roma Spider', '812 Superfast', '812 GTS', 'F8 Tributo', 'F8 Spider', 'Portofino M', '488 Pista', '488 GTB', 'LaFerrari', 'Daytona SP3'),
  },
  {
    id: 'lamborghini',
    name: 'Lamborghini',
    logo: { svg: lamborghiniLogo },
    aspect: 0.857,
    models: m('Revuelto', 'Temerario', 'Urus SE', 'Urus Performante', 'Urus S', 'Urus', 'Huracán STO', 'Huracán Tecnica', 'Huracán Sterrato', 'Huracán EVO', 'Huracán', 'Aventador SVJ', 'Aventador S', 'Aventador'),
  },
  {
    id: 'mclaren',
    name: 'McLaren',
    logo: { svg: mclarenLogo },
    aspect: 6.723,
    scale: 1.3, // a thin wordmark: wider to hold its own
    models: m('W1', '750S', '765LT', '720S', 'Artura', 'GTS', 'GT', 'Senna', 'Elva', '600LT', '570S', 'P1'),
  },
  {
    id: 'porsche',
    name: 'Porsche',
    logo: { svg: porscheLogo },
    aspect: 0.779,
    models: m('911 Turbo S', '911 GT3 RS', '911 GT3', '911 Carrera', '911 Dakar', '718 Cayman GT4 RS', '718 Cayman', '718 Boxster', 'Taycan', 'Panamera', 'Cayenne', 'Macan', '918 Spyder', 'Carrera GT'),
  },
  {
    id: 'rolls-royce',
    name: 'Rolls-Royce',
    logo: { src: rollsRoyceImage },
    aspect: 0.763,
    models: m('Phantom', 'Cullinan', 'Ghost', 'Spectre', 'Wraith', 'Dawn'),
  },
  {
    id: 'bentley',
    name: 'Bentley',
    logo: { src: bentleyImage },
    aspect: 2.231,
    scale: 1.2,
    models: m('Continental GT', 'Continental GTC', 'Flying Spur', 'Bentayga', 'Mulsanne'),
  },
  {
    id: 'aston-martin',
    name: 'Aston Martin',
    logo: { src: astonMartinImage },
    aspect: 4.407,
    scale: 1.3, // fine wings: wider to hold their own
    models: m('DB12', 'Vanquish', 'Vantage', 'DBX707', 'DBX', 'DBS', 'DB11', 'Valhalla', 'Valkyrie'),
  },
  {
    id: 'audi',
    name: 'Audi',
    logo: { svg: audiLogo },
    aspect: 2.89,
    models: m('R8', 'RS e-tron GT', 'RS Q8', 'RS 7', 'RS 6 Avant', 'RS 5', 'RS 3', 'S8', 'A8', 'Q8'),
  },
  {
    id: 'bmw',
    name: 'BMW',
    logo: { svg: bmwLogo },
    aspect: 1,
    models: m('XM', 'M8', 'M5', 'M4', 'M3', 'M2', 'X7', 'X6 M', 'X5 M', '7 Series', 'i7'),
  },
  {
    id: 'bugatti',
    name: 'Bugatti',
    logo: { src: bugattiImage },
    aspect: 1.329,
    scale: 0.8, // the solid EB reads heavier than the line marks
    models: m('Tourbillon', 'Chiron Super Sport', 'Chiron Sport', 'Chiron', 'Divo', 'Bolide', 'Veyron'),
  },
  {
    id: 'mercedes-benz',
    name: 'Mercedes-Benz',
    logo: { svg: mercedesLogo },
    aspect: 1,
    models: m('G 63 AMG', 'G-Class', 'Maybach S-Class', 'S-Class', 'Maybach GLS', 'GLS', 'GLE', 'AMG GT', 'AMG GT Black Series', 'SL', 'C 63 AMG', 'E-Class', 'EQS', 'SLS AMG'),
  },
  {
    id: 'range-rover',
    name: 'Range Rover',
    logo: { src: rangeRoverImage },
    aspect: 3.692,
    models: m('Range Rover', 'Range Rover SV', 'Range Rover Sport', 'Range Rover Sport SV', 'Range Rover Velar', 'Range Rover Evoque'),
  },
]

export const findBrand = (id: string) => BRANDS.find((b) => b.id === id)

/** Model years, newest first, for a model (or the full range) */
export function yearsFor(model?: VehicleModel): string[] {
  const latest = new Date().getFullYear() + 1
  const [first, last] = model?.years ?? [OLDEST_YEAR, latest]
  return Array.from({ length: Math.min(last, latest) - first + 1 }, (_, i) => String(Math.min(last, latest) - i))
}
