
class Coordenadas {
    x = 0;
    y = 0;

    constructor(x, y){
        if (typeof x !== 'number' || typeof y !== 'number') {
            this.x = 0;
            this.y = 0;
        }else{
            this.x = x;
            this.y = y;
        }
    }

    toString(){
        return `(${this.x}, ${this.y})`;
    }
    
    copiar(){
        return new Coordenadas(this.x, this.y);
    }

    cambiar(nuevoX, nuevoY){
        this.x = nuevoX;
        this.y = nuevoY;
    }
    suma(x2, y2){

        this.x = this.x + x2;
        this.y = this.y + y2;
    }

    obtenerDistancia(x2, y2){
        //raiz cuadrada de (x2 - x1)elevado a 2  + (y2 - y1)elevado a 2
        var  operacion1 = (x2 - this.x) * (x2 - this.x);
        var operacion2 = (y2 - this.y) * (y2 - this.y);

        var resultado =  Math.sqrt(operacion1 + operacion2);
        return resultado;

    }
}

let misCoordenadas = new Coordenadas (-5, 2);
document.getElementById("original").innerHTML = misCoordenadas.toString();

misCoordenadas.cambiar(1, 5);
document.getElementById("cambiado").innerHTML = misCoordenadas.toString();

misCoordenadas.suma(2, -1);
document.getElementById("suma").innerHTML = misCoordenadas.toString();

var resultado = misCoordenadas.obtenerDistancia(7, 1);
document.getElementById("distancia").innerHTML = resultado;