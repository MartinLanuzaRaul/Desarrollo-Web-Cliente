class Baraja {
    cartas = [];

    constructor(cartas) {
        this.cartas = cartas;
    }

    toString() {
        
    }
}

let cartasOrdenadas = [];

for ( i = 1; i <= 13; i++) {
    let carta = new Carta('p', i); 
    cartasOrdenadas[i] = carta;
}

let miBaraja = new Baraja(cartasOrdenadas);
document.getElementById("baraja").innerHTML = miBaraja.toString();