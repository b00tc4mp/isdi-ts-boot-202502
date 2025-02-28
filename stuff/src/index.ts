const age: number = 34;
const name1: string = "Pee";

let surname = "Guardiola";

const numbers = [2, 4, 6, 8];

function sumNumbers(numbers: number[]): number {
  return numbers.reduce((total, number) => {
    total += number;

    return total;
  });
}

const numbersSum = sumNumbers(numbers);

//console.log(numbersSum);

//Type aliases

type Student = {
  name: string;
  age: number;
  score: number | string; //Union type
};

const students: Student[] = [
  {
    name: "Pep",
    age: 43,
    score: "90",
  },
  {
    name: "Josep",
    age: 34,
    score: 75,
  },
  {
    name: "Anna",
    age: 25,
    score: 97,
  },
];

function triplify(value: number | string): number | string {
  if (typeof value === "number") {
    return value * 3;
  }

  return value.repeat(3);
}

console.log(triplify("A"));

type PaymentMethod = "cash" | "paypal" | "card" | "crypto";

function getPayment(payment: PaymentMethod) {
  switch (payment) {
    case "card":
      console.log("Payment done with card");
      break;
    case "cash":
      console.log("Ummm, really, cash...");
      break;
    case "crypto":
      console.log("Damm, yoy arew so fk rich!");
      break;
    case "paypal":
      console.log("Payment done with paypal");
      break;
    default:
      console.log("Insert a correct payment method");
      break;
  }
}

getPayment("crypto");

//Type intersection

// type Category = "novel" | "horror" | "adventure";

type Karate = {
  origin: string;
};

type Boxing = {
  gloves: boolean;
};

type UFC = Karate & Boxing;

const khabib: UFC = {
  gloves: false,
  origin: "Russia",
};

//Type narrowing using instanceof operator
function getFullDate(date: Date | string): void {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(new Date(date).toUTCString());
  }
}

getFullDate("2025-02-27");

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Company {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

function greet(entity: User | Company): string {
  if (entity instanceof Company) return `Welcome ${entity.name}`;

  return `Hi ${entity.name}`;
}

const cristinita = new User("Cristinita");
const ajuntamentDeBarcelona = new Company("Jordi");

console.log(greet(ajuntamentDeBarcelona));

type Movie = {
  title: string;
  duration: number;
  director: string;
};

type TvShow = {
  title: string;
  episodeDuration: number;
  numberOfEpisodes: number;
};

const getRunTime = (audiovisual: Movie | TvShow): number => {
  if ("numberOfEpisodes" in audiovisual) {
    return audiovisual.episodeDuration * audiovisual.numberOfEpisodes;
  }

  return audiovisual.duration;
};

const aTodoGasNen: Movie = {
  director: "Michal Bay",
  title: "Rapidos y Furiosos",
  duration: 190,
};

const laReinaDelFlow: TvShow = {
  title: "Queen of flow",
  numberOfEpisodes: 90,
  episodeDuration: 60,
};

console.log(getRunTime(aTodoGasNen) + " minutes");
console.log(getRunTime(laReinaDelFlow) + " minutes");

type Emo = {
  cry(): string;
};

type Punk = {
  punch: () => void;
};

const showBehaviour = (urbanTribe: Emo | Punk): void => {
  if ("punch" in urbanTribe) {
    console.log(urbanTribe.punch());
  } else {
    console.log(urbanTribe.cry());
  }
};

showBehaviour({
  cry: () => "Sniff sniff",
});

function printLetter(word: string | null): void {
  if (!word) {
    console.log("No word provided");
  } else {
    console.log(word);
  }
}

printLetter(null);

//optional props
type Hero = {
  readonly id: string;
  name: string;
  power?: string;
};

const hulk: Hero = {
  id: "abc123",
  name: "Hulk",
};

hulk.name = "Bruce Banner";
hulk.power = "supaaaa strength";

type Email = {
  kind: "email";
  subject: string;
  recipient: string;
};

type Sms = {
  kind: "sms";
  phoneNumber: number;
  message: string;
};

type Push = {
  kind: "push";
  title: string;
  deviceId: string;
};

type MyNotification = Email | Sms | Push;

const sendNotification = (notification: MyNotification): string => {
  let result = "";

  switch (notification.kind) {
    case "sms":
      result += `Sending sms to ${notification.phoneNumber} with the message ${notification.message}`;
      break;
    case "push":
      result += `Sending push notification from ${notification.deviceId} with title ${notification.title}`;
      break;
    case "email":
      result += `Sendig email to ${notification.recipient} with subject: ${notification.subject} `;
      break;
  }

  return result;
};

console.log(
  sendNotification({
    kind: "sms",
    phoneNumber: 678902837,
    message: "Estoy cansado jefe...",
  })
);
