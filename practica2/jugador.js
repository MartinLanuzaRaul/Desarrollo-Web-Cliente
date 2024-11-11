class Jugador {
    mano = [];

    constructor() {
        this.mano = []; 
    }

    nuevaCarta(baraja) {
        for (let i = 0; i < 6; i++) {
            const carta = baraja.reparteCarta();
            if (carta) {
                this.mano.push(carta);
            }
        }
    }

    toString() {
        let manoCartas = "";
        for (let i = 0; i < this.mano.length; i++) {
            manoCartas += this.mano[i].toString();
            if (i < this.mano.length - 1) {
                manoCartas += " "; 
            }
        }
        return manoCartas;
    }
}



