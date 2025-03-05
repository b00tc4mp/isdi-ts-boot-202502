class Person {
  constructor(protected name: string, public age: number) {
    this.name = name
    this.age = age
  }

  get getName(): string {
    return this.name
  }
}

const person1 = new Person('Cholo', 56)

console.log(person1.getName)

class Student extends Person {
  constructor(name: string, age: number, public grade: string) {
    super(name, age)
  }

  get getName(): string {
    return `The name is ${this.getName}`
  }
}

const student1 = new Student('Paola', 13, 'Secundaria')

console.log(student1.age)

class Teacher extends Person {
  private _studentNames: Student[] = []

  constructor(name: string, age: number) {
    super(name, age)
  }

  get getName(): string {
    return this.name
  }

  addStudents(students: Student[]): void {
    students.forEach((student) => {
      this._studentNames.push(student)
    })
  }

  get getStudents(): Student[] {
    return this._studentNames
  }
}

const manu = new Teacher('Manu', 48)

const rafa = new Student('Rafa', 33, 'software developer')
const cris = new Student('Cris', 32, 'software developer')

manu.addStudents([rafa, cris])
console.log(manu.getStudents)
