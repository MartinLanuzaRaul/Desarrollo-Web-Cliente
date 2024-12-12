class jugador {
    mano = [];

    constructor() {
        this.mano = []; 
    }

    nuevaCarta(baraja) {
        for (let i = 0; i < 5; i++) {
            const carta = baraja.reparteCarta();
            if (carta) {
                this.mano.push(carta);
            }
        }
    }

    toString() {
        let manoCartas = "";
        for (let i = 0; i < this.mano.length; i++) {
            manoCartas = manoCartas + this.mano[i].toString();
            if (i < this.mano.length - 1) {
                manoCartas = manoCartas + " "; 
            }
        }
        return manoCartas;
    }

    
    jugada() {
        //Pareja, Doble pareja, Trío, Escalera, Color, Full, Póker o Escalera de color
        let contadorParejas = 0;
        let contadorTrio = 0;
        let contadorColor = 0;
        let contadorPoker = 0;
        let jugada = "";
        let palo = "";
    
        for (let i = 0; i < this.mano.length; i++) {
            let contador = 0;
            for (let x = 0; x < this.mano.length; x++) {
                if (this.mano[x].toString().split(" ")[0] == this.mano[i].toString().split(" ")[0]) {
                    contador++;
                }
            }
    
            if (contador == 2) {
                contadorParejas++;
            } else if (contador == 3) {
                contadorTrio++;
            } else if(contador == 4){
                contadorPoker++;
            }
    
            for (let y = 0; y < this.mano.length; y++) {
                if (this.mano[y].toString().split(" ")[2] == this.mano[i].toString().split(" ")[2]) {
                    contadorColor++;
                }
                let valoresCartas = [];
                let escalera = false;
                let valor = this.mano[i].toString().split(" ")[0];
                if(valor == "Rey"){
                    valor = 13;
                }else if(valor == "Reina"){
                    valor = 12;
                }else if(valor == "Jack"){
                    valor = 11;
                }else if(valor == "As"){
                    valor = 1;
                }
                valoresCartas[i] = valor;  
                valoresCartas.sort((a, b) => a - b);

            }

            
            console.log(this.mano[i].toString());

           

            for (let i = 0; i < this.mano.length; i++) {
                let valor = this.mano[i].toString().split(" ")[0];
                if(valor == "Rey"){
                    valor = 13;
                }else if(valor == "Reina"){
                    valor = 12;
                }else if(valor == "Jack"){
                    valor = 11;
                }else if(valor == "As"){
                    valor = 1;
                }
                document.getElementById("carta" + i).setAttribute("src", "cartas/" + this.mano[i].getPalo() + valor + ".svg");
              
               

               console.log(this.mano[i].getPalo() + valor + ".svg");
               
            }

            console.log(this.mano);


        }
    
        if (contadorTrio > 0) {
            jugada = "Trio";
            if(contadorParejas > 0){
                jugada = "Full";
            }
        } else if (contadorParejas == 2) {
            jugada = "Pareja";
        }else if(contadorParejas == 4){
            jugada = "Doble pareja"
        } else if (contadorColor == 5) {
            jugada = "Color";
        } else if(contadorPoker > 0){
            jugada = "Poker";
        }
    
        return jugada;
    }
}

