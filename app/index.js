import { Abonado } from './model/cliente.js';
import { Vehiculo } from './model/vehiculo.js';
import { Parking } from './model/parking.js';
import {depositarVehiculo} from './servicios/zonaCliente/depositarVehiculo.js'
import {retirarVehiculo} from './servicios/zonaCliente/retirarVehiculo.js'

let vehiculo1 = new Vehiculo("audi","HIP2002", 0.12, 1);
let vehiculo2 = new Vehiculo("audi","HIP2002", 0.12, 2);
let abonado1 = new Abonado("Anual", "45544554E", "Paco de Luis", "Federico García", 12345678912345, 956565656, "pacodeluis@email.com", "22/01/90", "22/01/21");
let parking = new Parking(45, 15, 15, 15, 5, 5, 5);

console.log(abonado1.bono);
console.log(abonado1.nombre);
console.log(abonado1.apellidos);
console.log(abonado1.nTarjeta);
console.log(abonado1.telefono);
console.log(abonado1.email);
console.log(abonado1.fechaRegistro);
console.log(abonado1.fechaCancelacion);

console.log(abonado1.toString());
console.log(vehiculo1.toString());

depositarVehiculo(vehiculo1, parking);
console.log("número de plazas de motos: " + (parking.plazasMoto - parking.plazasOcupadasMoto));
console.log("número de plazas de turismos: " + (parking.plazasTurismo - parking.plazasOcupadasTurismo));
console.log("número de plazas de caravanas: " + (parking.plazasCaravana - parking.plazasOcupadasCarava));

retirarVehiculo(vehiculo2, parking);
console.log("número de plazas de motos: " + (parking.plazasMoto - parking.plazasOcupadasMoto));
console.log("número de plazas de turismos: " + (parking.plazasTurismo - parking.plazasOcupadasTurismo));
console.log("número de plazas de caravanas: " + (parking.plazasCaravana - parking.plazasOcupadasCarava));