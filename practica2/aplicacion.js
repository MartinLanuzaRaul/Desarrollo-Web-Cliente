window.addEventListener("load", function() {
    let cartasOrdenadas = [];
    const palos = ['p', 'd', 'c', 't'];

    for (let palo of palos) {
        for (let valor = 1; valor <= 12; valor++) {
            let carta = new Carta(palo, valor);
            cartasOrdenadas.push(carta);
        }
    }

    let miBaraja = new Baraja(cartasOrdenadas);

    miBaraja.barajar();


    let miJugador = new jugador();
    miJugador.nuevaCarta(miBaraja);

   this.document.getElementById("divCarta0").innerHTML = miJugador.mano.toString().split(",")[0];
   this.document.getElementById("divCarta1").innerHTML = miJugador.mano.toString().split(",")[1];
   this.document.getElementById("divCarta2").innerHTML = miJugador.mano.toString().split(",")[2];
   this.document.getElementById("divCarta3").innerHTML = miJugador.mano.toString().split(",")[3];
   this.document.getElementById("divCarta4").innerHTML = miJugador.mano.toString().split(",")[4];


    document.getElementById("jugada").innerHTML = miJugador.jugada();

    

});