// NARROWING
function mostraLongitud ( objeto: number | string ) {
  if (typeof objeto === 'string') {  // Aqui pasa como en el canvas de antes. TS infiere el tipo correcto
    return objeto.length             // cuando llega a este punto
  }
  return objeto.toString().length
}

interface Mario {
  company: 'Nintendo', // Podemos asignar un valor para que siempre sea ese
  name: string,
  saltar: () => void
}

interface Sonic {
  company: 'Sega',
  name: string,
  correr: () => void
}

type Personaje = Mario | Sonic

function jugar( personaje: Personaje ) {
  personaje.name

  if (personaje.company === 'Nintendo') {
    personaje.saltar()
    return
  }

  personaje.correr()

}

function jugar2( personaje: Personaje ) {
  personaje.name

  if ('saltar' in personaje) {
    personaje.saltar()
    return
  }

  personaje.correr()
}
// Otra opcion es TYPE GUARD sino tenemos propiedad que no discrimina
// comprobamos si el personaje es Mario
// Y esta funcion determina cual es
function isMario( personaje: Personaje ): personaje is Mario {
  return (personaje as Sonic).correr !== undefined
}
// HAY QUE EVITARLO SIEMPRE QUE SE PUEDA, Alternativa InstanceOf o TypeOf cuando no se puede
function jugar3( personaje: Personaje ) {
  personaje.name

  if ( isMario(personaje) ) {
    personaje.saltar()
    return
  }
  personaje.correr()
}
