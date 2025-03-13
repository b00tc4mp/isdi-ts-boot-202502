import DangerousTruck from "./DangerousTruck";
// import RefrigeratedTruck from "./RefrigeratedTruck";
import { DangerousCharge } from "./types";

const gasBottles: DangerousCharge[] = [
  {
    id: "123",
    isSafe: true,
  },
  {
    id: "234",
    isSafe: true,
  },
  {
    id: "567",
    isSafe: false,
  },
];

const gasBottlesTruck = new DangerousTruck(200, 30, gasBottles);

console.log(gasBottlesTruck.showDetails());
console.log(gasBottlesTruck.calculateNeededFuel(120));
console.log(gasBottlesTruck.secureCharge());
console.log(gasBottlesTruck.showDetails());
console.log(gasBottlesTruck.secureCharge());
gasBottlesTruck.addCharge({ id: "2bsd", isSafe: false });
console.log(gasBottlesTruck.showDetails());
console.log(gasBottlesTruck.secureCharge());
console.log(gasBottlesTruck.showDetails());

///////////////////////////

// const icecreamsTruck = new RefrigeratedTruck(90, 15);

// console.log(icecreamsTruck.temperature);
// console.log(icecreamsTruck.showDetails());
