document.addEventListener('DOMContentLoaded', () => {
    const nombreTareaInput = document.getElementById('nombreTarea');
    const agregarTareaBoton = document.getElementById('agregarTarea');
    const listaTareasDiv = document.getElementById('listaTareas');

    // Cargar tareas desde el almacenamiento local
    cargarTareas();

    agregarTareaBoton.addEventListener('click', () => {
        const nombreTarea = nombreTareaInput.value.trim();
        const prioridad = document.querySelector('input[name="prioridad"]:checked').value;

        if (nombreTarea) {
            const tarea = { nombre: nombreTarea, prioridad: prioridad };
            agregarTareaAlAlmacenamiento(tarea);
            nombreTareaInput.value = ''; // Limpiar el campo de entrada
            cargarTareas(); // Recargar la lista de tareas
        } else {
            alert('Por favor, ingresa un nombre para la tarea.');
        }
    });

    function agregarTareaAlAlmacenamiento(tarea) {
        const tareas = obtenerTareasDelAlmacenamiento();
        tareas.push(tarea);
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }

    function obtenerTareasDelAlmacenamiento() {
        const tareas = localStorage.getItem('tareas');
        
        if (tareas) {
            return JSON.parse(tareas); // Si hay tareas, las parseamos y las devolvemos
        } else {
            return []; // Si no hay tareas, devolvemos un array vacío
        }
    }

  function cargarTareas() {
    const tareas = obtenerTareasDelAlmacenamiento();
    listaTareasDiv.innerHTML = ''; // Limpiar la lista antes de cargar

    if (tareas.length > 0) {
        tareas.forEach((tarea, indice) => {
            const tareaDiv = document.createElement('div');
            tareaDiv.className = 'tarea';
            tareaDiv.innerHTML = `
                <span>${tarea.nombre} - Prioridad: ${tarea.prioridad}</span>
                <button onclick="eliminarTarea(${indice})">Eliminar</button>
            `;
            listaTareasDiv.appendChild(tareaDiv);
        });
    } else {
        const mensaje = document.createElement('div');
        mensaje.textContent = 'No hay tareas disponibles.';
        listaTareasDiv.appendChild(mensaje);
    }
}


    window.eliminarTarea = function(indice) {
        const tareas = obtenerTareasDelAlmacenamiento();
        tareas.splice(indice, 1); // Eliminar la tarea
        localStorage.setItem('tareas', JSON.stringify(tareas));
        cargarTareas(); // Recargar la lista de tareas
    }
});