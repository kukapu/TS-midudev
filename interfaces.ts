// INTERFACES si que puede EXTENDER
interface Heroe {
  id: number
  name: string
  age: number
  saludar: () => void
} 

const heroe: Heroe = {
  id: 1,
  name: 'Spiderman',
  age: 30,
  saludar: () => {
    console.log('Hola')
  }
}

interface Producto {
  id: number
  name: string
  price: number
  quantity: number
}

interface Zapatilla extends Producto {
  talla: number
}

interface CarritoDeCompra {
  totalPrice: number,
  products: Producto[]
}

interface CarritoOps1 {
  add: (product: Producto) => void
  remove: (id: number) => void
  clear: () => void
} // Dos formas de definir funciones es una interfaz
interface CarritoOps2 {
  add(product: Producto): void
  remove(id: number): void
  clear(): void
} // y se pueden escribir varias veces AUNQUE NO ES RECOMENDABLE
interface CarritoOps2 {
  all(): Producto[]
}

const carrito: CarritoDeCompra = {
  totalPrice: 100,
  products: [
    {
      id: 1,
      name: 'Producto 1',
      price: 100,
      quantity: 1
    }
  ]
}