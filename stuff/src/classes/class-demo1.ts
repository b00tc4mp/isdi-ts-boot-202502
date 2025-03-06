interface IEmployee {
  name: string;

  promotion(newSalary: number): void;
}

abstract class Employee implements IEmployee {
  protected _id: string;
  protected _salary: number;

  constructor(public name: string, salary: number) {
    this._salary = salary;

    this._id = (Math.random() ** 15).toString(36);
  }

  get id(): string {
    return this._id;
  }

  protected updateSalary(newSalary: number): void {
    if (typeof newSalary !== "number") {
      throw new Error("new salary is not a number");
    }

    if (newSalary < this._salary) {
      throw new Error("the new salary must be greater than the actual");
    }

    this._salary = newSalary;
  }

  promotion(newSalary: number): void {
    this.updateSalary(newSalary);
  }

  get salary(): number {
    return this._salary;
  }
}

class JuniorEmployee extends Employee {
  constructor(name: string, salary: number) {
    super(name, salary);
  }
}

const rafa = new JuniorEmployee("Rafa", 1700);

console.log(rafa.salary);
console.log(rafa.id);
