function printStuff<T>(stuff: T): T {
  return stuff
}

type Car = {
  brand: string
  model: string
}

type Specs = {
  price: number
  engine: 'gas' | 'oil' | 'electric'
}

const sayHiToPepe = printStuff<string>('Hola Pepe!')
const myNumber = printStuff<number>(23)
const myCar: Car = printStuff<Car>({ brand: 'Toyota', model: 'Corolla' })

function mergeObjects<T, U>(object1: T, object2: U): T & U {
  return {
    ...object1,
    ...object2,
  }
}

const carDetails = mergeObjects(myCar, {
  price: 2000,
  engine: 'electric',
})

enum Resolution {
  LOW = '800x600',
  MEDIUM = '1200x800',
  HIGH = '1800x1200',
}

interface IPlaylist<T> {
  additems(items: T): void
}

type Song = {
  title: string
  artists: string[]
  duration: number
}

type Video = {
  resolution: Resolution
  author: string
  title: string
}

class Playlist<T extends { title: string }> implements IPlaylist<T> {
  private _items: T[] = []

  additems(items: T): void {
    this._items.push(items)
  }

  removeitems(name: string): void {
    this._items = this._items.filter((items) => items.title !== name)
  }

  get items() {
    return this._items
  }
}

const spotifyPlaylist = new Playlist<Song>()

spotifyPlaylist.additems({
  title: 'La Vuelta',
  duration: 3.5,
  artists: ['Sau'],
})

// spotifyPlaylist.removeitems('La Vuelta')

// console.log(spotifyPlaylist.items)

const videoPlaylist = new Playlist<Video>()

videoPlaylist.additems({
  author: 'Ben Stiller',
  resolution: Resolution.LOW,
  title: 'Argo',
})

console.log(videoPlaylist.items)

videoPlaylist.removeitems('Argo')

console.log(videoPlaylist.items)
