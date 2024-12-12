function anyadir(){
    var tarea = document.getElementById("tarea").value;
    
    let limiteEnsegundos = 60*60*24*30;
    document.cookie = "`tarea="+tarea + ";max-age=${"+limiteEnsegundos+"}`";
    
    let arrayCookie = document.cookie.split("; ");
    for(let cookie of arrayCookie) {
    let valor = cookie.split("=")[1]; //desestructuración array
    console.log(valor);
    

    var elemento = document.createElement("li");
    var boton = document.createElement("button");
    var contenido = document.createTextNode("- " + valor + " ");
    elemento.appendChild(contenido);
    boton.innerHTML = "Eliminar";
    boton.setAttribute("id", "botonEliminar");

    elemento.appendChild(boton);

    document.body.appendChild(elemento);
    document.getElementById("botonEliminar").addEventListener("click", eliminar);

    
    }

    function eliminar(){
        elemento.remove(this.elemento);
    }
    
   
}
