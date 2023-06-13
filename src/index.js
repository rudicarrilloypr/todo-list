import './style.css';

let tasks = [];

const todoList = document.getElementById('todo-list');
const taskInput = document.getElementById('task-input');
const clearCompletedBtn = document.getElementById('clear-completed-btn');
const refreshBtn = document.getElementById('refresh-btn');
const enterBtn = document.getElementById('enter-btn');

let draggedItem = null;

function populateTodoList() {
    // Limpiar la lista antes de volver a poblarla
    todoList.innerHTML = '';

    tasks.sort((a, b) => a.index - b.index).forEach(task => {
        const listItem = document.createElement('li');
        listItem.draggable = true;

        // Crear checkbox y añadirlo a la tarea
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', function () {
            task.completed = !task.completed;
            populateTodoList(); // Actualizar la lista en el DOM
        });
        listItem.append(checkbox);

        const text = document.createElement('span');
        text.textContent = task.description;
        text.contentEditable = true; // Permitir la edición de la tarea
        listItem.append(text);

        // Crear el botón de eliminar y agregarlo a la tarea
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fas fa-trash-alt delete-icon"></i>';
        deleteBtn.addEventListener('click', function () {
            tasks = tasks.filter(t => t.description !== task.description);
            populateTodoList(); // Actualizar la lista en el DOM
        });
        listItem.append(deleteBtn);

        // Crear el botón de arrastrar y añadirlo a la tarea
        const dragBtn = document.createElement('button');
        dragBtn.innerHTML = '<i class="fas fa-ellipsis-v drag-icon"></i>';
        dragBtn.className = 'drag-btn';
        listItem.append(dragBtn);

        todoList.append(listItem);

        listItem.addEventListener('dragstart', function (e) {
            draggedItem = task;
        });

        listItem.addEventListener('dragover', function (e) {
            e.preventDefault();
        });

        listItem.addEventListener('drop', function (e) {
            e.preventDefault();

            const oldIndex = tasks.findIndex(t => t.description === draggedItem.description);
            const newIndex = tasks.findIndex(t => t.description === task.description);

            tasks[oldIndex].index = newIndex;
            tasks[newIndex].index = oldIndex;

            tasks.sort((a, b) => a.index - b.index);
            populateTodoList();
        });
    });
}

// Función para manejar la adición de nuevas tareas
function handleNewTask() {
    if (taskInput.value.trim() === '') return; // No agregar tareas vacías

    const newTask = {
        description: taskInput.value,
        completed: false,
        index: tasks.length,
    };
    tasks.push(newTask);

    taskInput.value = ''; // Limpiar el input
    populateTodoList(); // Actualizar la lista en el DOM
}

// Función para manejar la eliminación de tareas completadas
function handleClearCompleted() {
    tasks = tasks.filter(task => !task.completed);
    populateTodoList(); // Actualizar la lista en el DOM
}

// Agregar event listeners
taskInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        handleNewTask();
    }
});

function handleRefresh() {
    // Aquí puedes realizar cualquier acción que desees cuando se haga clic en el botón de actualizar
    console.log('La lista de tareas ha sido actualizada');
}

clearCompletedBtn.addEventListener('click', handleClearCompleted);
refreshBtn.addEventListener('click', handleRefresh);
window.onload = populateTodoList;

enterBtn.addEventListener('click', handleNewTask);
