// INFERENCIA
let namee = 'Fernando'
namee = 2


// FUNCIONES
// LOS PARAMETROS DE LAS FUNCIONES NO TIENEN INFERENCIA
// LOS RETURNS SI

function saludar( name: string ) {
  console.log(`Hola ${name}`)
}

saludar('Fernando')
saludar(2)

function saludar2({ name, age }: { name: string, age: number }) {
  console.log(`Hola ${name}, tienes ${age} años`)
  return age
}

function saludar3( persona: { name: string, age: number }): number {
  const { name, age } = persona
  console.log(`Hola ${name}, tienes ${age} años`)
  return age
}

saludar2({ name: 'Fernando', age: 21  })
saludar2({ name: 21, age: 'Fernando'  })

let username: string = 'Fernando'
username = saludar2({ name: 'Fernando', age: 21  })


// FUNCION COMO PARAMETRO
const sayHiFromFunction = ( fn: (name: string) =>   ) => {
  fn('Fernando')
}
const sayHi = ( name: string ) => {
  console.log(`Hola ${name}`)
}

sayHiFromFunction( sayHi )


// TIPAR ARROW FUNCTIONS
const sumar = ( a: number, b: number ): number => {
  return a + b
}

const sumar2: (a: number, b: number ) => number = ( a, b ) => {
  return a + b
}


// NEVER
const throwError = ( message: string ): never => {
  throw new Error(message)


  // return implicito. VA A SALTER SIEMPRE EL THROW ANTES NUNCA DEJAS QUE SE EJECUTE
  // EN EL VOID SI SE EJECUTA LA FUNCION ENTERA
}


// INFERENCIA FUNCIONES ANONIMAS SEGUN EL CONTEXTO
const avengers = ['Capitan America', 'Ironman', 'Thor']

avengers.forEach( (avenger) => { // en este caso si que hay inferencia de datos 
  console.log(avenger.toUpperCase())
}) 

// OBJETOS
let hero = {
  name: 'Ironman',
  age: 45,
}

hero.age = 'felis'  // no se puede cambiar el tipo de dato
hero.power = 2000   // no se puede añadir propiedades nuevas

const createHero = ( name: string, age: number ) => {
  return {
    name,
    age,
   
  }
}

const ironman = createHero('Ironman', 45)


