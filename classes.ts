// CLASES
class Avenger {
  readonly name: string
  private readonly powerScore: number
  wonBattles: number = 0
  // default es public
  // protected solo se puede acceder desde la clase o clases que heredan

  constructor(name: string, powerScore: number) {
    this.name = name
    this.powerScore = powerScore
  }

  get fullName() {
    return this.name + ' de poder ' + this.powerScore
  }

  set power( newPower: number ) {
    if ( newPower <= 100 ) {
      this.powerScore = newPower
    } else {
      throw new Error('No puede ser mayor de 100')
    }
  }
}
// El PRIVATE en TS solo sera privado en tiempo de compilacion pero luego en ejecucion no
// Para privado en JS hay que usar # antes de la propiedad
const avenger = new Avenger('Ironman', 90)
avenger.name = 'Hulk'

interface Avenger2 {
  name: string
  powerScore: number
  wonBattles: number
  battle: ( enemy: string, win: boolean ) => void
}

class Avenger2 implements Avenger2 {
  constructor(name: string, powerScore: number) {
    this.name = name
    this.powerScore = powerScore
  }

  battle( enemy: string, win: boolean ) {
    if ( win ) {
      this.wonBattles++
      this.powerScore += 1
    }
  }

  get fullName() {
    return this.name + ' de poder ' + this.powerScore
  }

  set power( newPower: number ) {
    if ( newPower <= 100 ) {
      this.powerScore = newPower
    } else {
      throw new Error('No puede ser mayor de 100')
    }
  }
} 
