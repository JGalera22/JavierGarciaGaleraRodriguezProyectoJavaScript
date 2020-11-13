import {Vehiculo} from '../../model/vehiculo.js';
import {Parking} from '../../model/parking.js';
import {Abonado} from '../../model/cliente.js';
import moment from 'moment';
import readlineSync from 'readline-Sync';


let parking = new Parking();
let vehiculo = new Vehiculo();
let abonado = new Abonado();
//let readlineSync = require('readline-sync');

/*
let vehiculo = new Vehiculo("audi","HIP2002", 0.12, 1);
let parking = new Parking(45, 15, 15, 15, 5, 5, 5);
*/

function depositarVehiculoAbonado(vehiculo, parking, abonado){
        
        let matricula = readlineSync.question('Introduzca su matricula');
        let dni = readlineSync.question('Introduzca su DNI');

        if(matricula == vehiculo.matricula){
            if(dni = abonado.dni){
                if(vehiculo.tipo == 1 && parking.plazasMoto > parking.plazasOcupadasMoto + parking.plazasReservadasMoto){
                    parking.plazasReservadasMoto ++;
                    vehiculo.setEntradaParking(moment().format('HH:mm'));
                    return parking.plazasReservadasMoto;
                }
                if(vehiculo.tipo == 2 && parking.plazasTurismo > parking.plazasOcupadasTurismo + parking.plazasReservadasTurismo){
                    parking.plazasReservadasTurismo ++;
                    vehiculo.setEntradaParking(moment().format('HH:mm'));
                    return parking.plazasReservadasTurismo;
                }
                if(vehiculo.tipo == 3 && parking.plazasCaravana > parking.plazasOcupadasCaravana + parking.plazasReservadasCaravana){
                    parking.plazasReservadasCaravana ++;
                    vehiculo.setEntradaParking(moment().format('HH:mm'));
                    return parking.plazasReservadasCaravana;
                }

            }
        }
       
}

export {depositarVehiculoAbonado};