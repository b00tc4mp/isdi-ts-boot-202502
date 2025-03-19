function printStuff<T>(stuff: T): T {
  return stuff;
}

type Car = {
  brand: string;
  model: string;
};

type Speciffication = {
  price: number;
  kindOfEngine: "gas" | "oil" | "electric";
};

const sayHiToPep = printStuff<string>("Hola Pep!");
const myNumber = printStuff<number>(33);
const myCar: Car = printStuff<Car>({ brand: "Fiat", model: "punto" });

function mergeObjects<T, U>(object1: T, object2: U): T & U {
  return {
    ...object1,
    ...object2,
  };
}

const carDetails = mergeObjects(myCar, {
  price: 23,
  kindOfEngine: "electric",
});

console.log(carDetails);

enum Resolution {
  LOW = "800x600",
  MEDIUM = "1200X900",
  HIGH = "1400X1200",
}

interface IPlaylist<T extends { id: string }> {
  addItem(item: T): void;
  removeItem(id: string): void;
}

type Song = {
  id: string;
  title: string;
  artists: string[];
  duration: number;
};

type Video = {
  id: string;
  resolution: Resolution;
  author: string;
  title: string;
};

class Playlist<T extends { id: string }> implements IPlaylist<T> {
  private _items: T[] = [];

  addItem(item: T): void {
    this._items.push(item);
  }

  removeItem(id: string): void {
    const itemIndex = this._items.findIndex((item) => item.id === id);

    if (itemIndex < 0) throw new Error("item not found");

    this._items.splice(itemIndex, 1);
  }

  get items() {
    return this._items;
  }
}

const spotifyPlaylist = new Playlist<Song>();

spotifyPlaylist.addItem({
  id: "123abc",
  title: "boig per tu",
  duration: 3.5,
  artists: ["Sau"],
});

console.log(spotifyPlaylist.items);

try {
  spotifyPlaylist.removeItem("123abc");
} catch (error) {
  console.error(error);
}

console.log(spotifyPlaylist.items);

const videoPlaylist = new Playlist<Video>();

videoPlaylist.addItem({
  id: "456majabiandebuguiwiguiribi",
  author: "Ben Afleck",
  resolution: Resolution.LOW,
  title: "Argo",
});

console.log(videoPlaylist.items);

////////////////////////////////////

interface IStack<T> {
  push(item: T): void;
  pop(): T | null;
  peek(): T;
  isEmpty(): boolean;
}

class Stack<T> implements IStack<T> {
  private _items: T[] = [];

  push(item: T): void {
    this._items.push(item);
  }

  pop(): T | null {
    const lastItem = this._items.pop();

    return lastItem === undefined ? null : lastItem;
  }

  peek(): T {
    return this._items[this._items.length - 1];
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }
}

type Book = {
  author: string;
  pages: number;
  title: string;
};

const booksStack = new Stack<Book>();

//agregar un elemento al final de la pila (stack)
booksStack.push({
  author: "H.P Lovecraft",
  pages: 120,
  title: "The stranger",
});

//agregar un elemento al final de la pila (stack)
booksStack.push({
  author: "Patrick Rothfuss",
  title: "El nombre del viento",
  pages: 700,
});

//mirar si esta vacia la pila (stack)
console.log(booksStack.isEmpty());

//mirar ultimo elemento de la pila
console.log(booksStack.peek());

//remover el ultimo elemento de la pila
console.log(booksStack.pop());

console.log(booksStack.peek());
