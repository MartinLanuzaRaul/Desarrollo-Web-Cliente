let contador = 0;

let hoy = new Date();
let caducidadMs = hoy.getTime() + 1000 * 60 * 60 * 24 * 7;
let caducidad = new Date(caducidadMs);

let arrayCookie = document.cookie.split("; ");

for (let cookie of arrayCookie) {
    let [nombre, valor] = cookie.split("="); // Desestructuración para obtener nombre y valor
    if (nombre === "numeroVisitas") {
        contador = parseInt(valor); 
    }
}

contador++;

document.cookie = `numeroVisitas=${contador}; expires=${caducidad.toUTCString()}; path=/`;

let texto = "La página se ha visitado " + contador + " veces.";

document.getElementById("contadorVisitas").innerHTML = texto;