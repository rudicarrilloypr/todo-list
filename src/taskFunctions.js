import { toggleTaskCompleted } from './statusUpdates.js';

let draggedItem = null;
let tasks = [];

export function getTasks() {
  return tasks;
}

export function setTasks(newTasks) {
  tasks = newTasks;
  // eslint-disable-next-line no-use-before-define
  saveTasksToLocalStorage(tasks);
}

export function saveTasksToLocalStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function loadTasksFromLocalStorage() {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
  }
}

function updateTaskIndexes(tasks) {
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i;
  }
  return tasks;
}

export function handleNewTask(taskInput, populateTodoList, getTasks, setTasks) {
  const tasks = getTasks();

  if (taskInput.value.trim() === '') return;

  const newTask = {
    description: taskInput.value,
    completed: false,
    index: tasks.length,
  };

  tasks.push(newTask);

  setTasks(tasks);

  taskInput.value = '';
  populateTodoList(tasks, document.getElementById('todo-list'));
}

export function handleClearCompleted(populateTodoList, getTasks, setTasks) {
  let tasks = getTasks();
  tasks = tasks.filter((task) => !task.completed);
  tasks = updateTaskIndexes(tasks);
  setTasks(tasks);
  populateTodoList(tasks, document.getElementById('todo-list'));
}

export function populateTodoList(tasks, todoList) {
  todoList.innerHTML = '';

  tasks.sort((a, b) => a.index - b.index).forEach((task) => {
    const listItem = document.createElement('li');
    listItem.draggable = true;

    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      toggleTaskCompleted(task, getTasks, setTasks);
      populateTodoList(getTasks(), todoList);
    });

    const text = document.createElement('span');
    text.textContent = task.description;
    text.contentEditable = true;

    // Añade el manejador del evento 'blur'
    text.addEventListener('blur', () => {
      task.description = text.textContent;
      saveTasksToLocalStorage(tasks);
    });

    textContainer.append(checkbox, text);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt delete-icon"></i>';
    deleteBtn.addEventListener('click', () => {
      let tasks = getTasks();
      tasks = tasks.filter((t) => t.description !== task.description);
      tasks = updateTaskIndexes(tasks);
      setTasks(tasks);
      populateTodoList(tasks, todoList);
    });
    buttonContainer.appendChild(deleteBtn);

    const dragBtn = document.createElement('button');
    dragBtn.innerHTML = '<i class="fas fa-ellipsis-v drag-icon"></i>';
    dragBtn.className = 'drag-btn';
    buttonContainer.appendChild(dragBtn);

    listItem.append(textContainer, buttonContainer);
    todoList.append(listItem);

    listItem.addEventListener('dragstart', () => {
      draggedItem = task;
    });

    listItem.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    listItem.addEventListener('drop', (e) => {
      e.preventDefault();
      let tasks = getTasks();

      const oldIndex = tasks.findIndex((t) => t.description === draggedItem.description);
      const newIndex = tasks.findIndex((t) => t.description === task.description);

      tasks[oldIndex].index = newIndex;
      tasks[newIndex].index = oldIndex;

      tasks = tasks.sort((a, b) => a.index - b.index);
      setTasks(tasks);
      populateTodoList(tasks, todoList);
    });
  });
}
