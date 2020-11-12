class Cliente{
    constructor(bono){
       this.bono = bono;
    }
}

class Abonado extends Cliente{
    constructor(bono, dni, nombre, apellidos, nTarjeta, telefono, email, fechaRegistro, fechaCancelacion){
        super(bono);
        this.dni = dni;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.nTarjeta = nTarjeta;
        this.telefono = telefono;
        this.email = email;
        this.fechaRegistro = fechaRegistro;
        this.fechaCancelacion = fechaCancelacion;

    }

toString(){
    return console.log(this.bono + " " + this.dni + " " + this.nombre + " " + this.apellidos + " " + this.nTarjeta + " " + this.telefono 
    + " " + this.email + " " + this.fechaRegistro + " " + this.fechaCancelacion);
}

}



export {Abonado};