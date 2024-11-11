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

    barajar() {
        for (var i = this.cartas.length - 1; i > 0; i--) { 
       
            var j = Math.floor(Math.random() * (i +1));
                       
            var temp = this.cartas[i];
            this.cartas[i] = this.cartas[j];
            this.cartas[j] = temp;
        }
           
        return this.cartas;
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

miBaraja.barajar();
document.getElementById("baraja2").innerHTML = miBaraja.toString();

document.getElementById("cartaRepartida").innerHTML = miBaraja.reparteCarta();
document.getElementById("cartaRepartida2").innerHTML = miBaraja.reparteCarta();

document.getElementById("barajaRepartida").innerHTML = miBaraja.toString();

let miJugador = new Jugador();
miJugador.nuevaCarta(miBaraja); 

document.getElementById("mano").innerHTML = miJugador.toString();



