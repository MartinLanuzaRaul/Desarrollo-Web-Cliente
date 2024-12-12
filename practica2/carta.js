class Carta {
    palo = "";
    valor = 0;

    constructor(palo = null, valor = null) {
        if (palo == 'c' || palo == 'd' || palo == 't' || palo == 'p') {
            this.palo = palo;
        }
        if (valor >= 1 && valor <= 13) {
            this.valor = valor;
        }
    }

    toString() {
        let figura = "";
        let familia = "";

        if (this.valor == 1) {
            figura = "As";
        } else if (this.valor == 10) {
            figura = "Jack";
        } else if (this.valor == 11) {
            figura = "Reina";
        } else if (this.valor == 12) {
            figura = "Rey";
        }

        if (this.palo == "c") {
            familia = "corazones";
        } else if (this.palo == "d") {
            familia = "diamantes";
        } else if (this.palo == "t") {
            familia = "treboles";
        } else if (this.palo == "p"){
            familia = "picas";
        }

        if (figura !== "") {
            return  figura + " de " + familia + ".";
        } else {
            return this.valor + " de " + familia + ".";
        }
    }

    getPalo(){
        return this.palo;
    }


    darValor(palo, valor){
        if (palo == 'c' || palo == 'd' || palo == 't' || palo == 'p') {
            this.palo = palo;
        }
        if (valor >= 1 && valor <= 13) {
            this.valor = valor;
        }
    }
}

