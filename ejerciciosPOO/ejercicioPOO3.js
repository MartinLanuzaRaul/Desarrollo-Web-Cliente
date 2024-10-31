var dia = prompt("dia?");
var mes = prompt("mes?");
var anyo = prompt("anyo?");

var dia2 = prompt("dia 2?");
var mes2 = prompt("mes 2?");
var anyo2 = prompt("anyo 2?");

var fecha1 = new Date(anyo, mes-1, dia);
document.getElementById("fecha1").innerHTML = fecha1.toDateString();

var fecha2 = new Date(anyo2, mes2-1, dia2);
document.getElementById("fecha2").innerHTML = fecha2.toDateString();

var diferencia = fecha1 - fecha2;

var diferenciaDias = Math.round(diferencia/ (1000 * 3600 * 24));

document.getElementById("diferencia").innerHTML = diferenciaDias;


