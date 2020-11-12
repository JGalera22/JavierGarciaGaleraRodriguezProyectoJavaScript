class Vehiculo {
    constructor(nombre, matricula, coste, tipo, entradaParking){
        this.nombre = nombre;
        this.matricula = matricula;
        this.coste = coste;
        this.tipo = tipo;
        this.entradaParking = entradaParking;

    }

    toString(){
        return console.log(this.nombre + " " + this.matricula + " " + this.coste + "€" + this.tipo + " " + this.entradaParking);
    }

    getEntradaParking() {
		return entradaParking;
	}

	setEntradaParking(entradaParking) {
		this.entradaParking = entradaParking;
	}
}

export {Vehiculo};