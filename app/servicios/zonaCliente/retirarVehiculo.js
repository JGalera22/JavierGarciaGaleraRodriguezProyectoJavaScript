import {Vehiculo} from '../../model/vehiculo.js'
import {Parking} from '../../model/parking.js'

let parking = new Parking();
let vehiculo = new Vehiculo();

/*
let vehiculo = new Vehiculo("audi","HIP2002", 0.12, 1);
let parking = new Parking(45, 15, 15, 15, 5, 5, 5);
*/

function retirarVehiculo(vehiculo, parking){

                if(vehiculo.tipo == 1 && parking.plazasOcupadasMoto != 0){
                    parking.plazasOcupadasMoto --;
                    return parking.plazasOcupadasMoto;
                }
                if(vehiculo.tipo == 2 && parking.plazasOcupadasTurismo != 0){
                    parking.plazasOcupadasTurismo --;
                    return parking.plazasOcupadasTurismo;
                }
                if(vehiculo.tipo == 3 && parking.plazasOcupadasCaravana != 0){
                    parking.plazasOcupadasCaravana --;
                    return parking.plazasOcupadasCaravana;
                }
        
       
}

/*
console.log("número de plazas de motos: " + (parking.plazasMoto - parking.plazasOcupadasMoto));
console.log("número de plazas de turismos: " + (parking.plazasTurismo - parking.plazasOcupadasTurismo));
console.log("número de plazas de caravanas: " + (parking.plazasCaravana - parking.plazasOcupadasCarava));
*/

export {retirarVehiculo};