// Función para cargar las tareas desde el almacenamiento local
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Limpiar la lista antes de cargar

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = `${task.name} - Prioridad: ${task.priority}`;
        
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
    const taskInput = document.getElementById('taskInput');
    const priorityRadios = document.querySelectorAll('input[name="priority"]');
    let selectedPriority;

    // Obtener la prioridad seleccionada
    priorityRadios.forEach(radio => {
        if (radio.checked) {
            selectedPriority = radio.value;
        }
    });

    const taskName = taskInput.value.trim();
    if (taskName === '') {
        alert('Por favor, ingresa un nombre para la tarea.');
        return;
    }

    // Crear un objeto de tarea
    const task = {
        name: taskName,
        priority: selectedPriority
    };

    // Obtener las tareas existentes y añadir la nueva tarea
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Limpiar el campo de entrada y recargar la lista
    taskInput.value = '';
    loadTasks();
}

// Función para eliminar una tarea
function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1); // Eliminar la tarea en el índice especificado
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks(); // Recargar la lista
}

// Evento para añadir tarea al hacer clic en el botón
document.getElementById('addTaskButton').addEventListener('click', addTask);

// Cargar las tareas al iniciar la página
loadTasks();