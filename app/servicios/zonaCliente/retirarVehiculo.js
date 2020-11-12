import {Vehiculo} from '../../model/vehiculo.js'
import {Parking} from '../../model/parking.js'
import moment from 'moment';

let parking = new Parking();
let vehiculo = new Vehiculo();

/*
let vehiculo = new Vehiculo("audi","HIP2002", 0.12, 1);
let parking = new Parking(45, 15, 15, 15, 5, 5, 5);
*/

function retirarVehiculo(vehiculo, parking){
    let c = moment().startOf('day').fromNow();
    let a = new Date(moment.duration(vehiculo.entradaParking-c).humanize());

                if(vehiculo.tipo == 1 && parking.plazasOcupadasMoto != 0){
                    parking.plazasOcupadasMoto --;
                    vehiculo.coste = parking.costeMoto * (a.getHours() * 60 + a.getMinutes()); 
                    return parking.plazasOcupadasMoto;
                }
                if(vehiculo.tipo == 2 && parking.plazasOcupadasTurismo != 0){
                    parking.plazasOcupadasTurismo --;
                    vehiculo.coste = parking.costeTurismo * (a.getHours() * 60 + a.getMinutes());
                    return parking.plazasOcupadasTurismo;
                }
                if(vehiculo.tipo == 3 && parking.plazasOcupadasCaravana != 0){
                    parking.plazasOcupadasCaravana --;
                    vehiculo.coste = parking.costeCaravana * (a.getHours() * 60 + a.getMinutes());
                    return parking.plazasOcupadasCaravana;
                }
    return vehiculo.coste;         
}

/*
console.log("número de plazas de motos: " + (parking.plazasMoto - parking.plazasOcupadasMoto));
console.log("número de plazas de turismos: " + (parking.plazasTurismo - parking.plazasOcupadasTurismo));
console.log("número de plazas de caravanas: " + (parking.plazasCaravana - parking.plazasOcupadasCarava));
*/

export {retirarVehiculo};