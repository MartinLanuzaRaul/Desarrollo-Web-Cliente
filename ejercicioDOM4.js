
function enviar() {
    let nombre = prompt("¿Nombre?");
    let ubicacion = prompt("¿Ubicación?");
    let ejemplares = prompt("Ejemplares?");
    let flor = prompt("¿Flor?");

    var nuevaFila = document.createElement("tr");
    var nuevoNombre = document.createElement("td");
    var nuevaUbicacion = document.createElement("td");
    var nuevoEjemplares = document.createElement("td");
    var nuevaFlor = document.createElement("td");

    nuevoNombre.textContent = nombre;
    nuevaUbicacion.textContent = ubicacion;
    nuevoEjemplares.textContent = ejemplares;
    nuevaFlor.textContent = flor;

    nuevaFila.appendChild(nuevoNombre);
    nuevaFila.appendChild(nuevaUbicacion);
    nuevaFila.appendChild(nuevoEjemplares);
    nuevaFila.appendChild(nuevaFlor);

    document.getElementById("tabla").appendChild(nuevaFila);
}

function borrar(){
    var filaAEliminar = document.getElementById("tabla").lastElementChild;
    filaAEliminar.parentNode.removeChild(filaAEliminar);
}