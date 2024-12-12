class Articulo {
    constructor(nombre, localizacion, precio) {
        this.nombre = nombre;
        this.localizacion = localizacion;
        this.precio = precio;
    }

    toString() {
        return "(" + this.nombre + ", " + this.localizacion + ", " + this.precio + ")";
    }

    actualizarPrecio(nuevoPrecio){
        this.precio = nuevoPrecio;
    }
}

class ArticuloFresco extends Articulo {
    constructor(nombre, localizacion, precio, fecha, duracion) {
        super(nombre, localizacion, precio); 
        this.fecha = fecha;
        this.duracion = duracion;
    }

    toString() {
        return "(" + this.nombre + ", " + this.edad + ", " + this.sexo + " - " + this.fecha + ", " + this.duracion + ")";
    }
}
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Limpiar la lista antes de cargar

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = `${task.nombre}`;
        
        const infoButton = document.createElement('button');
        infoButton.textContent = 'Informacion';
        infoButton.onclick = () => {
            showArticulo();
        };

        li.appendChild(infoButton);
        taskList.appendChild(li);

        const actualizarButton = document.createElement('button');
        actualizarButton.textContent = 'Modificar precio';
        actualizarButton.onclick = () => {
            modificarPrecio();
        };

        li.appendChild(actualizarButton);
        taskList.appendChild(li);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = () => {
            deleteTask(index);
        };

        li.appendChild(deleteButton);
        taskList.appendChild(li);

        
    });
}

// Función para añadir una nueva tarea
function addTask() {
    const nombreInput = document.getElementById('nombreInput');
    const localizacionInput = document.getElementById('localizacionInput');
    const precioInput = document.getElementById('precioInput');
    const fechaInput = document.getElementById('fechaInput');
    const duracionInput = document.getElementById('duracionInput');

  


    const nombreArticulo = nombreInput.value;
    const localizacionArticulo = localizacionInput.value;
    const precioArticulo = precioInput.value;
    const fechaArticulo = fechaInput.value;
    const duracionArticulo = duracionInput.value;

    if (nombreArticulo === '') {
        alert('Por favor, ingresa un nombre para el articulo.');
        return;
    }
    if (localizacionArticulo === '') {
        alert('Por favor, ingresa una localizacion para el articulo.');
        return;
    }if (precioArticulo === '') {
        alert('Por favor, ingresa un precio para el articulo.');
        return;
    }if (fechaArticulo === '') {
        alert('Por favor, ingresa una fecha para el articulo.');
        return;
    }if (duracionArticulo === '') {
        alert('Por favor, ingresa una duracion para el articulo.');
        return;
    }

    // Crear un objeto de tarea
    const task = {
        nombre: nombreArticulo,
        localizacion: localizacionArticulo,
        precio: precioArticulo,
        fecha: fechaArticulo,
        duracion: duracionArticulo
    };

    // Obtener las tareas existentes y añadir la nueva tarea
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Limpiar el campo de entrada y recargar la lista
    nombreInput.value = '';
    loadTasks();
}

// Función para eliminar una tarea
function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1); // Eliminar la tarea en el índice especificado
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks(); // Recargar la lista
}

function modificarPrecio(){
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let nuevoPrecio = parseInt(prompt("Nuevo precio:"));
    tasks.precio = nuevoPrecio;
    console.log(tasks.precio);
}

function showArticulo(){
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    alert(tasks.toString); 
    for(let i = 0 ; i < tasks ; i++){
        if(i.nombre == nombre){
            console.log(tasks[i].nombre + " " + tasks[i].localizacion + " " + tasks[i].precio + " " + tasks[i].fecha + " " + tasks[i].duracion);
        }
    }
   
}

// Evento para añadir tarea al hacer clic en el botón
document.getElementById('addTaskButton').addEventListener('click', addTask);

// Cargar las tareas al iniciar la página
loadTasks();