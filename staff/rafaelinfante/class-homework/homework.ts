interface Refrigerado {
  mantenerTemperatura(): void
}

interface Peligroso {
  verificarSeguridad(): void
}

abstract class Vehiculo {
  protected _pesoCarga: number
  protected _distanciaRecorrer: number

  constructor(pesoCarga: number, distanciaRecorrer: number) {
    this._pesoCarga = pesoCarga
    this._distanciaRecorrer = distanciaRecorrer
  }

  calcularCombustible(): number {
    return this._pesoCarga * 0.5 + this._distanciaRecorrer * 0.2
  }

  mostrarDetalle(): void {
    console.log(`Peso de carga: ${this._pesoCarga}`)
    console.log(`Distancia a recorrer: ${this._distanciaRecorrer}`)
    console.log(`Combustible requerido: ${this.calcularCombustible()} litros`)
  }
}

class Camion extends Vehiculo {
  constructor(pesoCarga: number, distanciaRecorrer: number) {
    super(pesoCarga, distanciaRecorrer)
  }
}

class CamionRefrigerado extends Vehiculo implements Refrigerado {
  private _temperatura: number

  constructor(
    pesoCarga: number,
    distanciaRecorrer: number,
    temperatura: number
  ) {
    super(pesoCarga, distanciaRecorrer)
    this._temperatura = temperatura
  }

  mantenerTemperatura(): void {
    console.log(`Manteniendo temperatura a ${this._temperatura} ºC`)
  }
}

class CamionPeligroso extends Vehiculo implements Peligroso {
  constructor(
    pesoCarga: number,
    distanciaRecorrer: number,
    temperatura: number
  ) {
    super(pesoCarga, distanciaRecorrer)
  }

  verificarSeguridad(): void {
    console.log('Verificando Seguridad...')
  }
}

const camion1 = new Camion(2000, 500)
camion1.mostrarDetalle()
