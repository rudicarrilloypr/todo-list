import './style.css';
import {
  // eslint-disable-next-line max-len, no-unused-vars
  handleNewTask, handleClearCompleted, populateTodoList, getTasks, setTasks, loadTasksFromLocalStorage,
} from './taskFunctions.js';
// eslint-disable-next-line no-unused-vars
import { toggleTaskCompleted, clearAllCompleted } from './statusUpdates.js';

const todoList = document.getElementById('todo-list');
const taskInput = document.getElementById('task-input');
const clearCompletedBtn = document.getElementById('clear-completed-btn');
const refreshBtn = document.getElementById('refresh-btn');
const enterBtn = document.getElementById('enter-btn');

// Agregar event listeners
taskInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    handleNewTask(taskInput, populateTodoList, getTasks, setTasks);
  }
});

function handleRefresh() {
  // Aquí puedes realizar cualquier acción que desees cuando se haga clic en el botón de actualizar
  // eslint-disable-next-line no-console
  console.log('La lista de tareas ha sido actualizada');
}

clearCompletedBtn.addEventListener('click', () => clearAllCompleted(populateTodoList, getTasks, setTasks, todoList));
refreshBtn.addEventListener('click', handleRefresh);

window.onload = () => {
  loadTasksFromLocalStorage();
  populateTodoList(getTasks(), todoList);
};

enterBtn.addEventListener('click', () => handleNewTask(taskInput, populateTodoList, getTasks, setTasks));
