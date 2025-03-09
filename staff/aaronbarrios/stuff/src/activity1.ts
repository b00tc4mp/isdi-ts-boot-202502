abstract class Vehicle {
    constructor(public chargeWeight: number, public distanceToTravel: number) {

    }

    calculateFuel(chargeWeight: number, distanceToTravel: number, transportBaseConsume: number) {
        const chargeFactor: number = 1 + (chargeWeight * 0.02)

        const adjustedConsume: number = chargeFactor * transportBaseConsume

        const totalFuelNeeded: number = (adjustedConsume / 100) * distanceToTravel

        return totalFuelNeeded
    }

    abstract showDetails(): void;
}

interface IRefrigerated {
    keepTemperature(temperature: number): void;
}

interface IDangerous {
    verifySecurity(): void;
}

class Truck extends Vehicle {
    constructor(public chargeWeight: number, public distanceToTravel: number) {
        super(chargeWeight, distanceToTravel)
    }

    showDetails(): object {
        return {
            'Charge Weight': this.chargeWeight,
            'Distance to Travel': this.distanceToTravel,
            'Total fuel Needed ': this.calculateFuel(this.chargeWeight, this.distanceToTravel, 30)
        }
    }
}

class RefrigeratedTruck extends Vehicle implements IRefrigerated {
    constructor(public chargeWeight: number, public distanceToTravel: number) {
        super(chargeWeight, distanceToTravel)
    }

    showDetails(): object {
        return {
            'Charge Weight': this.chargeWeight,
            'Distance to Travel': this.distanceToTravel,
            'Total fuel Needed': this.calculateFuel(this.chargeWeight, this.distanceToTravel, 30),
            'Temperature': this.keepTemperature(8)
        }
    }

    keepTemperature(temperature: number): string {
        return (`My temperature is: ${temperature}`)
    }
}

class DangerousTruck extends Vehicle implements IDangerous {
    constructor(public chargeWeight: number, public distanceToTravel: number) {
        super(chargeWeight, distanceToTravel)
    }

    showDetails(): object {
        return {
            'Charge Weight': this.chargeWeight,
            'Distance to Travel': this.distanceToTravel,
            'Total fuel Needed ': this.calculateFuel(this.chargeWeight, this.distanceToTravel, 30),
            'Security': this.verifySecurity()
        }
    }

    verifySecurity(): string {
        return ('Security not garanteed!')
    }
}

const CyberTruck = new Truck(40, 200)
console.log(CyberTruck.showDetails())

const FrigoPie = new RefrigeratedTruck(3000, 1000)
console.log(FrigoPie.showDetails())

const womanDriving = new DangerousTruck(2000, 500)
console.log(womanDriving.showDetails())