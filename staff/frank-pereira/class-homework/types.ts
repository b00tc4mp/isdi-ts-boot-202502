export interface IDangerousVehicle {
  secureCharge: () => void;
  addCharge: (charge: DangerousCharge | DangerousCharge[]) => void;
}

export interface IRefrigeratedVehicle {
  keepTemperature: () => void;
  gainTemperature: () => void;
}

export type DangerousCharge = {
  id: string;
  isSafe: boolean;
};

export type DangerousTruckDetails = {
  charge: DangerousCharge[];
  chargeWeight: number;
  baseConsume: number;
};

export type RefrigeratedTruckDetails = Omit<DangerousTruckDetails, "charge"> & {
  temperature: number;
};
