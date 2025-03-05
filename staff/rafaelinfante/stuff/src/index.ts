const age = 34

const name1 = 'Peter'

let surname = 'Parker'

const numbers: number[] = [2, 4, 6]

function sumNumbers(numbers: number[]): number {
  return numbers.reduce((total, number) => {
    total += number
    return total
  }, 0)
}

const numbersSum = sumNumbers(numbers)

// interface Person {
//   name: string
//   age: number
// }

// interface Student extends Person {
//   score: number
// }

// Type aliases
// type Student = {
//   name: string
//   age: number
//   score: number | string // Union type
// // }

// const students: Student[] = [
//   {
//     name: 'Pep',
//     age: 43,
//     score: '90',
//   },
//   {
//     name: 'Josep',
//     age: 34,
//     score: 70,
//   },
//   {
//     name: 'Anna',
//     age: 25,
//     score: 80,
//   },
// ]

function triplify(value: number | string): number | string {
  if (typeof value === 'number') {
    return value * 3
  }

  return value.repeat(3)
}

// console.log(triplify('a'))

// Type intersection

// type Category = 'novel' | 'horror' | 'adventure'

type Book = {
  writer: string
  title: string
}

type Novel = Book & {}
