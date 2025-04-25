import {
  DangerousCharge,
  DangerousTruckDetails,
  IDangerousVehicle,
} from "./types";
import Vehicle from "./Vehicle";

class DangerousTruck extends Vehicle implements IDangerousVehicle {
  private _charge: DangerousCharge[];

  constructor(
    chargeWeight: number,
    baseConsume: number,
    charge: DangerousCharge[]
  ) {
    super(chargeWeight, baseConsume);

    this._charge = charge;
  }

  private checkChargeSecurity(): boolean {
    return this._charge.every(({ isSafe }) => isSafe);
  }

  secureCharge(): void {
    if (!this.checkChargeSecurity()) {
      this._charge.forEach((item) => (item.isSafe = true));
    } else {
      console.log("The charge are already secure!");
    }
  }

  addCharge(charge: DangerousCharge[] | DangerousCharge): void {
    Array.isArray(charge)
      ? charge.forEach((item) => this._charge.push(item))
      : this._charge.push(charge);
  }

  showDetails(): DangerousTruckDetails {
    return {
      charge: this._charge,
      chargeWeight: this.chargeWeight,
      baseConsume: this.baseConsume,
    };
  }
}

export default DangerousTruck;
