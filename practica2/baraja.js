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

