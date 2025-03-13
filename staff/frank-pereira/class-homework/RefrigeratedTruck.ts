import { IRefrigeratedVehicle, RefrigeratedTruckDetails } from "./types";
import Vehicle from "./Vehicle";

class RefrigeratedTruck extends Vehicle implements IRefrigeratedVehicle {
  private _temperature: number = 0;

  constructor(chargeWeight: number, baseConsume: number) {
    super(chargeWeight, baseConsume);
  }

  get temperature(): number {
    return this._temperature;
  }

  private checkTemperature(): boolean {
    return this._temperature > 10;
  }

  keepTemperature(): void {
    this.checkTemperature()
      ? (this._temperature = 0)
      : console.log("The temperature is perfect");
  }

  gainTemperature(): void {
    this._temperature += 5;
  }

  showDetails(): RefrigeratedTruckDetails {
    return {
      chargeWeight: this.chargeWeight,
      baseConsume: this.baseConsume,
      temperature: this.temperature,
    };
  }
}

export default RefrigeratedTruck;
