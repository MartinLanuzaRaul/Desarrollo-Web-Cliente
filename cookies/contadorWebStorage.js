var x = parseInt(localStorage.getItem("numeroVisitas"));

x++;

localStorage.setItem("numeroVisitas", x);

let texto = "La página se ha visitado " + x + " veces.";

document.getElementById("contadorVisitas").innerHTML = texto;



