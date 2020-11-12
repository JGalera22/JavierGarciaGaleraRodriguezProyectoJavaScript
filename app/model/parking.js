class Parking {
    constructor(plazasTotales, plazasTurismo, plazasMoto, plazasCaravana, plazasOcupadasTurismo, plazasOcupadasMoto, 
        plazasOcupadasCarava, costeMoto, costeTurismo, costeCaravana){
        this.plazasTotales = plazasTotales;
        this.plazasTurismo = plazasTurismo;
        this.plazasMoto = plazasMoto;
        this.plazasCaravana = plazasCaravana;
        this.plazasOcupadasTurismo = plazasOcupadasTurismo;
        this.plazasOcupadasMoto = plazasOcupadasMoto;
        this.plazasOcupadasCarava = plazasOcupadasCarava;
        this.costeMoto = costeMoto;
        this.costeTurismo = costeTurismo;
        this.costeCaravana = costeCaravana;
    }
}


export {Parking};