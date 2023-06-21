// TYPE ALIAS
type Hero = {
  name: string,
  age: number,
}

let hero2: Hero = {
  name: 'Ironman',
  age: 45,
}

const createHero2 = ( name: string, age: number ): Hero => {
  return {
    name,
    age,
    isActive: true
  }
}

const ironman2 = createHero2('Ironman', 45)

const createHero3 = ( hero: Hero ): Hero => {
  const { name, age } = hero
  return {
    name,
    age,
  }
}

const ironman31 = createHero3('Ironman', 45)
const ironman3 = createHero3({ name: 'Ironman', age: 45 })


// OPCIONAL PROPERTY
type Hero2 = {
  readonly id?: number,  // readonly no se puede modificar
  name: string,
  age: number,
  isActive?: boolean,
}

const createHero4 = ( hero: Hero2 ): Hero2 => {
  const { name, age } = hero
  return {
    name,
    age,
    isActive: true
  }
}

const ironman4 = createHero4({ name: 'Ironman', age: 45 })
// const ironman5 = Object.freeze(createHero4({ name: 'Ironman', age: 45 }))
// ESTE SI SERIA INMUTABLE DE VERDAD DESDE EJECICION CON JS

ironman4.id?.toString()
ironman4.id = 124252551241123 // SI ES MUTABLE, solo nos avisa de que no se puede modificar


// TEMPLETE UNION TYPES
type HeroId = `${string}-${string}-${string}-${string}-${string}`

type Hero3 = {
  readonly id?: HeroId
  name: string
  age: number
  isActive?: boolean
}

function createHero5( hero: Hero3 ): Hero3 {
  const { name, age } = hero
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true
  }
}

const ironman5 = createHero5({ name: 'Ironman', age: 45 })

type HexadecimalColor = `#${string}`
const color: HexadecimalColor = '0033ff'
const color2: HexadecimalColor = '#0033ff'


// UNION TYPES 
type HeroId2 = `${string}-${string}-${string}-${string}-${string}`
type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal' | 'omnipresent'

type Hero4 = {
  readonly id?: HeroId2,
  name: string
  age: number
  isActive?: boolean
  powerScale?: HeroPowerScale
}

let an: string | number = 2
an = '2'
an = true

function createHero6( hero: Hero4 ): Hero4 {
  const { name, age } = hero
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true,
  }
}

const ironman6 = createHero6({ name: 'Ironman', age: 45 })

ironman6.powerScale = 'multiversal'


// INTERSECTION TYPES
type HeroId3 = `${string}-${string}-${string}-${string}-${string}`
type HeroPowerScale2 = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal' | 'omnipresent'

type HeroBasicInfo = {
  // readonly id?: number
  name: string
  age: number
}

type HeroProperties = {
  readonly id?: HeroId2
  isActive?: boolean
  powerScale?: HeroPowerScale
}

type Hero5 = HeroBasicInfo & HeroProperties // INTERSECCION CON LAS DOS PROPIEDADES
// si se repiten propiedades no se sobreescriben sino que las tiene que cumplir todas
// NO PUEDEN SER CONTRADICTORIAS


function createHero7( hero: HeroBasicInfo ): Hero5 {
  const { name, age } = hero
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true,
  }
}

const ironman7 = createHero7({ name: 'Ironman', age: 45 })

ironman6.powerScale = 'multiversal'


// TYPE INDEXING
type HeroProperties3 = {
  isActive?: boolean
  address: {
    planet: string
    country: string
  }
}

const addressHero: HeroProperties3['address'] = {
  planet: 'Tierra',
  country: 'España'
}


// TYPE FROM VALUE
const address = {
  planet: 'Tierra',
  country: 'España'
} 

type Address = typeof address

const addressTwitch: Address = {
  planet: 'Mars',
  country: 'Festin'
}


// TYPE FROM FUNCTION RETURN
function createAddress( planet: string, country: string ) {
  return {
    planet,
    country
  }
}

type Address2 = ReturnType<typeof createAddress>


// ARRAYS y TUPLAS
const languages: (string | number)[] = []
const languages2: Array<String> = []

languages.push('Javascript')
languages.push(2)
languages.push(true)

const heros: Hero5[] = []

/*
[
  ['X', 'O', 'X'],
  ['X', '', 'O'],
  ['O', 'O', 'X'],
]
*/

type CellValue = 'X' | 'O' | ''
type GameBoard = [
  [ CellValue, CellValue, CellValue ],
  [ CellValue, CellValue, CellValue ],
  [ CellValue, CellValue, CellValue ],
]

const gameBoard: GameBoard = [
  ['X', 'O', 'X'],
  ['X', '', 'O'],
  ['O', 'O', 'X'],
]

type RGB = [ number, number, number ]

const colorRGB: RGB = [255, 255, 255]
colorRGB.push(4) // DEBERIA DAR ERROR PORQUE ES TUPLA
// PODEMOS SOLUCIONARLO CON READONLY
type RGB2 = readonly [ number, number, number ]


// ENUMS
// En JS no existen los enums, pero en TS si
const ERROR_TYPES_JS = {
  NOT_FOUND: 'not found',
  UNAUTHORIZED: 'unauthorized',
  FORBIDDEN: 'forbidden',
}

function mostrarMensajeJS ( tipoDeError ) {
  if( tipoDeError === ERROR_TYPES_JS.NOT_FOUND ) {
    console.log('No se encuentra el recurso')
  }
  if( tipoDeError === ERROR_TYPES_JS.UNAUTHORIZED ) {
    console.log('No tienes permisos')
  }
  if( tipoDeError === ERROR_TYPES_JS.FORBIDDEN ) {
    console.log('No tienes permisos')
  }
}

enum ERROR_TYPES_TS {
  NOT_FOUND,
  UNAUTHORIZED,
  FORBIDDEN
}
// USAR LA QUE COMPILA Y GENERAR CODIGO CUANDO VAV A SER USADO HACIA FUERA
// EN LIBRERIAS O EN PROYECTOS QUE SEAN USADOS POR OTROS

const enum ERROR_TYPES_TS_NOCOMPILE {
  NOT_FOUND,
  UNAUTHORIZED,
  FORBIDDEN
} // PARA QUE NO SE COMPILASE HAY QUE PONER CONST

enum ERROR_TYPES_TS_ASIGNADO {
  NOT_FOUND = 'not found',
  UNAUTHORIZED = 'unauthorized',
  FORBIDDEN = 'forbidden'
} // TAMBIEN PODEMOS ASIGNARLE VALOR PARA QUE NO LE ASIGNE 0,1,2...

function mostrarMensajeTS ( tipoDeError: ERROR_TYPES_TS ) {
  if( tipoDeError === ERROR_TYPES_TS.NOT_FOUND ) {
    console.log('No se encuentra el recurso')
  }
  if( tipoDeError === ERROR_TYPES_TS.UNAUTHORIZED ) {
    console.log('No tienes permisos')
  }
  if( tipoDeError === ERROR_TYPES_TS.FORBIDDEN ) {
    console.log('No tienes permisos')
  }
}


// ASEVERACIONES DE TIPO
// null sino lo encuentra
// HTMLElement si lo encuentra de forma general
// como sabe realmente estas recuperando un elemento <canvas>?
const canvas = document.getElementById('canvas') as HTMLCanvasElement // Le obligamos el tipo tener en cuenta que ya no acepta el null
const ctx = (canvas as HTMLCanvasElement).getContext('2d')

// const canvas = document.getElementById('canvas') as HTMLCanvasElement
if( canvas !== null ) {
  const ctx = (canvas as HTMLCanvasElement).getContext('2d') // Este petaria con algo que no sea canvas
}

// Si instanciamos directamente en la desestructuracion tambien le entrara el tipo null
// pero hay que tener cuidado ya que ahora en el getElement si nos equivocamos y buscamos
// otro elemento que no sea canvas no se dara cuenta de que no es un canvas
if( canvas instanceof HTMLCanvasElement ) {
  // aunque no da error el codigo no peta porque no entra en el if
  const ctx = canvas.getContext('2d') // Al usar el JS de instanceof nos inferira el tipo
}

// typeof --> Para tipos (string, number...)
// instaceof --> Para instancias (HTMLElement, fechas...) [New..]


