import {Vehiculo} from '../../model/vehiculo.js'
import {Parking} from '../../model/parking.js'
import * as moment from 'moment';

let parking = new Parking();
let vehiculo = new Vehiculo();

/*
let vehiculo = new Vehiculo("audi","HIP2002", 0.12, 1);
let parking = new Parking(45, 15, 15, 15, 5, 5, 5);
*/

function depositarVehiculo(vehiculo, parking){

        if(parking.plazasTotales >= (parking.plazasOcupadasTurismo + parking.plazasOcupadasMoto + parking.plazasOcupadasCarava)){

                if(vehiculo.tipo == 1 && parking.plazasMoto > parking.plazasOcupadasMoto){
                    parking.plazasOcupadasMoto ++;
                    vehiculo.setEntradaParking(moment().format('HH:mm'));
                    return parking.plazasOcupadasMoto;
                }
                if(vehiculo.tipo == 2 && parking.plazasTurismo > parking.plazasOcupadasTurismo){
                    parking.plazasOcupadasTurismo ++;
                    vehiculo.setEntradaParking(moment().format('HH:mm'));
                    return parking.plazasOcupadasTurismo;
                }
                if(vehiculo.tipo == 3 && parking.plazasCaravana > parking.plazasOcupadasCaravana){
                    parking.plazasOcupadasCaravana ++;
                    vehiculo.setEntradaParking(moment().format('HH:mm'));
                    return parking.plazasOcupadasCaravana;
                }
        }
       
}

/*
console.log("número de plazas de motos: " + (parking.plazasMoto - parking.plazasOcupadasMoto));
console.log("número de plazas de turismos: " + (parking.plazasTurismo - parking.plazasOcupadasTurismo));
console.log("número de plazas de caravanas: " + (parking.plazasCaravana - parking.plazasOcupadasCarava));
*/

export {depositarVehiculo};