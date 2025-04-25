# Desafío: Sistema de Gestión de Transporte

## Contexto:

Una empresa de logística necesita gestionar diferentes tipos de vehículos para el
transporte de mercancías. Todos los vehículos comparten cierta lógica común (como el
cálculo de combustible necesario), pero algunos vehículos tienen capacidades especiales,
como refrigeración o transporte de materiales peligrosos.

### Requisitos:

Crear una clase abstracta Vehiculo que contenga:

Propiedades comunes: pesoCarga, distanciaRecorrer.
Método común para calcular el combustible necesario (calcularCombustible).
Método abstracto mostrarDetalle que cada subclase debe implementar.

- Crear una interfaz Refrigerado que defina el método mantenerTemperatura.

- Crear una interfaz Peligroso que defina el método verificarSeguridad.

- Crear las siguientes subclases que extienden Vehiculo y pueden implementar interfaces:

Camion que solo extiende Vehiculo.
CamionRefrigerado que extiende Vehiculo e implementa Refrigerado.
CamionPeligroso que extiende Vehiculo e implementa Peligroso.
Implementar los métodos necesarios en cada clase, asegurando que realizan operaciones lógicas
(por ejemplo, cálculos o verificaciones).

ALGORITMO PARA CALCULAR EL COMBUSTIBLE NECESITADO

    Cálculo Ejemplificado:

Datos:

chargeWeight: 20 toneladas
distanceToBeCovered: 200 km
transportBaseConsume: 30 litros/100km
Cálculos:

chargeFactor:
1 + ( 20 × 0.02 ) = 1 + 0.4 = 1.4

adjustedConsumePer100km:
30 × 1.4 = 42
30 × 1.4 = 42 litros/100km

totalFuelNeeded:
( 42 / 100 ) × 200 = 84
( 42 / 100 ) × 200 = 84 litros
