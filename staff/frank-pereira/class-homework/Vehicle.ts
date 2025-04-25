import { DangerousTruckDetails, RefrigeratedTruckDetails } from "./types";

abstract class Vehicle {
  protected chargeWeight: number;
  protected baseConsume: number; // liter per 100km

  constructor(chargeWeight: number, baseConsume: number) {
    this.chargeWeight = chargeWeight;
    this.baseConsume = baseConsume;
  }

  abstract showDetails(): DangerousTruckDetails | RefrigeratedTruckDetails;

  calculateNeededFuel(distanceToBeCovered: number): string {
    const chargeFactor = this.getChargeFactor();

    const newConsumePer100km = this.baseConsume * chargeFactor;

    const neededFuel = (newConsumePer100km / 100) * distanceToBeCovered;

    return `${neededFuel} liters`;
  }

  private getChargeFactor(): number {
    const incrementByTonelad = 0.03;

    const chargeFactor = 1 + this.chargeWeight * incrementByTonelad;

    return chargeFactor;
  }
}

export default Vehicle;
