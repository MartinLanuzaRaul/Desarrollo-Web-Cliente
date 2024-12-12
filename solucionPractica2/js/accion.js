class Carta {
	constructor(palo, valor) {
		if(["c", "d", "p", "t"].includes(palo) && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].includes(valor)) {
			this.palo = palo;
			this.valor = valor;
		} else {
			this.palo = null;
			this.valor = null;
		}
	}
	
	darValor(palo, valor) {
		if(["c", "d", "p", "t"].includes(palo) && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].includes(valor)) {
			this.palo = palo;
			this.valor = valor;
		}
	}
	
	toString() {
		const valores = new Map();
		valores.set(1, "As");
		valores.set(2, "Dos");
		valores.set(3, "Tres");
		valores.set(4, "Cuatro");
		valores.set(5, "Cinco");
		valores.set(6, "Seis");
		valores.set(7, "Siete");
		valores.set(8, "Ocho");
		valores.set(9, "Nueve");
		valores.set(10, "Diez");
		valores.set(11, "Jota");
		valores.set(12, "Reina");
		valores.set(13, "Rey");

		const palos = new Map();
		palos.set("c", "corazones");
		palos.set("d", "diamantes");
		palos.set("p", "picas");
		palos.set("t", "treboles");
		
		return valores.get(this.valor) + " de " + palos.get(this.palo);
	}
}

class Baraja {
	#cartas = [];
	
	constructor() {
		const palos = ["c", "d", "p", "t"];
		
		for(let i = 0; i < palos.length; i++) {
			for(let j = 1; j <= 13; j++) {
				this.#cartas.push(new Carta(palos[i], j));
			}
		}
	}
	
	barajar() {
		let aleatorio1, aleatorio2, temp;
		let numIntercambios = 100;
		
		for(let i = 0; i < numIntercambios; i++) {
			//generar números enteros aleatorios entre 0 y 51
			aleatorio1 = Math.trunc(Math.random() * (51.999 - 0));
			aleatorio2 = Math.trunc(Math.random() * (51.999 - 0));
				
			//intercambiar cartas de posiciones aleatorias
			temp = this.#cartas[aleatorio1];
			this.#cartas[aleatorio1] = this.#cartas[aleatorio2];
			this.#cartas[aleatorio2] = temp;
		}
	}
	
	toString() {
		let result = "";
		
		for(let i = 0; i < this.#cartas.length; i++) {
			result += this.#cartas[i].toString() + "\n";
		}
		
		return result;
	}
	
	reparteCarta() {
		return this.#cartas.pop();
	}
}

class Jugador {
	#mano = [];
	
	nuevaCarta(carta) {
		if(this.#mano.length < 5) {
			this.#mano.push(carta);
		}
	}
	
	toString() {
		let result = "";
		
		for(let i = 0; i < this.#mano.length; i++) {
			result += this.#mano[i].toString() + "\n";
		}
		
		return result;
	}
	
	jugada() {
		let conteo = new Array(this.#mano.length).fill(0);
		
		for(let i = 0; i < this.#mano.length; i++) {
			for(let j = 0; j < this.#mano.length; j++) {
				if(this.#mano[i].valor == this.#mano[j].valor) {
					conteo[i]++;
				}
			}
		}
				
		var sumaConteo = conteo.reduce((acumulador, valor) => {
			return acumulador + valor;
		}, 0);
		console.log(conteo);
		
		if(sumaConteo == 5) {
		//ningún valor repetido
			
		//comprueba escalera
			let valores = []
			for(let i = 0; i < this.#mano.length; i++) {
				valores.push(this.#mano[i].valor)
			}
			
			//ordeno los valores de la mano
			valores = valores.sort((a, b) => a - b);
			
			//compruebo si son valores consecutivos
			let escalera = true;
			for(let i = 1; i < valores.length; i++) {
				let diferencia = valores[i]-valores[i-1];
				if(diferencia > 1) {
					escalera = false;
				}
			}
		
		//si anteriormente no detectó escalera comprueba caso particular con el As como carta más alta
			if(!escalera) {
				escalera = true;
				let patronEscaleraAs = [1, 10, 11, 12, 13]
				for (let i = 0; i < patronEscaleraAs.length; i++) {
					if(valores[i] != patronEscaleraAs[i]){
						escalera = false;
					}
				}
			}
		
		//comprueba color
			//compruebo si los palos son todos iguales
			let color =  true;
			for(let i = 1; i < valores.length; i++) {
				if(this.#mano[i].palo != this.#mano[i-1].palo) {
					color = false;
				}
			}
		
		
			if(escalera && color) {
				return "¡Escalera de color!";
			} else if(escalera) {
				return "¡Escalera!";
			} else if(color) {
				return "¡Color!";
			} else {
				return "No tienes nada";
			}
			
		} else if(sumaConteo == 7) {
			return "¡Pareja!";
		} else if(sumaConteo == 9) {
			return "¡Dobles parejas!";
		} else if(sumaConteo == 11) {
			return "¡Trío!";
		} else if(sumaConteo == 13) {
			return "¡Full!";
		} else if(sumaConteo == 17) {
			return "¡Póker!";
		}
	}
	
	getMano() {
		return this.#mano;
	}
	
	trampa(jugada) {
		if(jugada == "escalera") {
			this.#mano[0].valor = 4;
			this.#mano[1].valor = 2;
			this.#mano[2].valor = 3;
			this.#mano[3].valor = 6;
			this.#mano[4].valor = 5;
		} else if(jugada == "color") {
			this.#mano[0].palo = "p";
			this.#mano[1].palo = "p";
			this.#mano[2].palo = "p";
			this.#mano[3].palo = "p";
			this.#mano[4].palo = "p";
		} else if(jugada == "full") {
			this.#mano[0].valor = 2;
			this.#mano[1].valor = 2;
			this.#mano[2].valor = 2;
			this.#mano[3].valor = 1;
			this.#mano[4].valor = 1;
		} else if(jugada == "poker") {
			this.#mano[0].valor = 2;
			this.#mano[1].valor = 1;
			this.#mano[2].valor = 1;
			this.#mano[3].valor = 1;
			this.#mano[4].valor = 1;
		} else if(jugada == "escaleraAlta") {
			this.#mano[0].valor = 10;
			this.#mano[1].valor = 11;
			this.#mano[2].valor = 12;
			this.#mano[3].valor = 13;
			this.#mano[4].valor = 1;
		}
	}
}

baraja1 = new Baraja();
console.log(baraja1.toString());

baraja1.barajar();
console.log(baraja1.toString());

jugador1 = new Jugador();
//se reparten 5 cartas
for(let i = 0; i < 5; i++) {
	jugador1.nuevaCarta(baraja1.reparteCarta());
	console.log("-----Mano-----\n" + jugador1.toString());
}

//jugador1.trampa("escalera");
//jugador1.trampa("escaleraAlta");
//jugador1.trampa("color");
//jugador1.trampa("poker");
//jugador1.trampa("full");

//mostrar imágenes de la mano
for(carta of jugador1.getMano()) {
	document.getElementsByTagName("main")[0].innerHTML += "<img src=\"img/cartas/" + carta.palo + carta.valor + ".svg\" width=\"100px\"/>";
}

// mostrar jugada obtenida
document.getElementById("resultado").innerHTML = jugador1.jugada();


