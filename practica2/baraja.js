class Baraja {
    cartas = [];

    constructor(cartas) {
        this.cartas = cartas;
    }

    toString() {
        let barajaCartas = "";
        for (let i = 0; i < this.cartas.length; i++) {
            barajaCartas = barajaCartas + this.cartas[i];
            if (i < this.cartas.length - 1) {
                barajaCartas = barajaCartas + " "; 
            }
        }
        return barajaCartas;
    }

    reparteCarta() {
        return this.cartas.pop(); 
    }

    barajar(){
        this.cartas = Math.floor(Math.random() * cartas.length);
    }
}

let cartasOrdenadas = [];

const palos = ['p', 'd', 'c', 't']; 

for (let palo of palos) {
   for (let valor = 1; valor <= 12; valor++) {
        let carta = new Carta(palo, valor);
        cartasOrdenadas.push(carta); 
   }
}

let miBaraja = new Baraja(cartasOrdenadas);
document.getElementById("baraja").innerHTML = miBaraja.toString();

document.getElementById("cartaRepartida").innerHTML = miBaraja.reparteCarta();

miBaraja.barajar();
document.getElementById("baraja2").innerHTML = miBaraja.toString();


