import './style.css';

const tasks = [
    { description: 'Task 1', completed: false, index: 0 },
    { description: 'Task 2', completed: false, index: 1 },
    { description: 'Task 3', completed: true, index: 2 },
];

const todoList = document.getElementById('todo-list');

function populateTodoList() {
    tasks.sort((a, b) => a.index - b.index).forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = task.description + (task.completed ? ' (completed)' : '');
        todoList.append(listItem);
    });
}

window.onload = populateTodoList;
