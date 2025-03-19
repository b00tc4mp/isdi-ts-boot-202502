// class Person {
//   private name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   get getName(): string {
//     return this.name;
//   }
// }

abstract class Person {
  constructor(public name: string, public age: number) {}

  abstract get getName(): string;

  getOlder(): number {
    this.age += 1;

    return this.age;
  }
}

type StudentsGrades = "high school" | "college" | "university";

//interface for all kind of students instances
interface IStudent {
  name: string;
  grade: StudentsGrades;
  languages: string[];

  showLearnedLanguages(): void;
  learnLanguages: (languages: string[]) => void;
}

export class Student extends Person {
  constructor(name: string, age: number, public grade: StudentsGrades) {
    super(name, age);
  }

  get getName(): string {
    return `The name is ${this.name}`;
  }

  getOlder(): number {
    this.age += 1;

    return this.age;
  }
}

class ItStudent extends Student implements IStudent {
  languages: string[] = [];

  constructor(name: string, age: number, grade: StudentsGrades) {
    super(name, age, grade);
  }

  showLearnedLanguages(): void {
    this.languages.forEach((language) => {
      console.log(language);
    });
  }

  learnLanguages(languages: string[]) {
    languages.forEach((language) => {
      this.languages.push(language);
    });
  }
}

const student1 = new Student("Paola", 13, "high school");

console.log(student1.getName);
console.log(student1.getOlder());

///////////////////////////////////////

const frontendDev = new ItStudent("Harold", 12, "high school");
frontendDev.learnLanguages(["php", "python", "ts"]);

frontendDev.showLearnedLanguages();

class Teacher extends Person {
  private _studentsNames: Student[] = [];

  constructor(name: string, age: number) {
    super(name, age);
  }

  get getName(): string {
    return this.name;
  }

  addStudents(students: Student[]): void {
    students.forEach((student) => {
      this._studentsNames.push(student);
    });
  }

  get students(): Student[] {
    return this._studentsNames;
  }
}

const manel = new Teacher("Manel", 43);

const cris = new Student("Cris", 34, "university");
const rafa = new Student("Rafa", 30, "university");
const aaron = new Student("Aaron", 26, "university");

manel.addStudents([cris, rafa, aaron]);
console.log(manel.students);
