class Vehiculo {
    constructor(nombre, matricula, coste, tipo){
        this.nombre = nombre;
        this.matricula = matricula;
        this.coste = coste;
        this.tipo = tipo;
    }

    toString(){
        return console.log(this.nombre + " " + this.matricula + " " + this.coste + "€" + this.tipo);
    }
}

export {Vehiculo};