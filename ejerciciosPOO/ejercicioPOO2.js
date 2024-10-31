class Ordenador{
    marca = "";
    modelo = "";
    memoria = 0;
    capacidad = 0;
    pulgadas = 0;

    constructor(marca, modelo, memoria = 4, capacidad = 512, pulgadas = 17) {
        this.marca = marca;
        this.modelo = modelo;
        this.memoria = memoria;
        this.capacidad = capacidad;
        this.pulgadas = pulgadas;
    }

    

    toString(){
        return "(" + this.marca + ", " + this.modelo + ", " + this.memoria + ", " + this.capacidad + ", " + this.pulgadas + ")";
    }
}

class Portatil extends Ordenador{
    autonomia = 0;

    constructor(marca, modelo, memoria = 4, capacidad = 256, pulgadas = 12, autonomia = 4) {
        super();
        this.marca = marca;
        this.modelo = modelo;
        this.memoria = memoria;
        this.capacidad = capacidad;
        this.pulgadas = pulgadas;
        this.autonomia = autonomia;
    }

    toString(){
        return "(" + this.marca + ", " + this.modelo + ", " + this.memoria + ", " + this.capacidad + ", " + this.pulgadas + ", " +  this.autonomia + ")";
    }
}

let miOrdenador = new Ordenador("omen", "obelisk");
document.getElementById("ordenador").innerHTML = miOrdenador.toString();

let miPortatil = new Portatil("hp", "chiron");
document.getElementById("portatil").innerHTML = miPortatil.toString();

