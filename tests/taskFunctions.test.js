import {
  getTasks,
  setTasks,
  saveTasksToLocalStorage,
  loadTasksFromLocalStorage,
  handleNewTask,
  handleClearCompleted,
  populateTodoList,
} from '../src/taskFunctions.js';

beforeEach(() => {
  global.localStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn(),
  };
});

describe('getTasks function', () => {
  it('should return the tasks', () => {
    const tasks = getTasks();
    expect(tasks).toEqual([]);
  });
});

describe('setTasks function', () => {
  it('should set the tasks', () => {
    const newTasks = [{ description: 'Task 1', completed: false }];
    setTasks(newTasks);
    expect(getTasks()).toEqual(newTasks);
  });
});

describe('saveTasksToLocalStorage function', () => {
  it('should save tasks to localStorage', () => {
    const tasks = [{ description: 'Task 1', completed: false }];
    saveTasksToLocalStorage(tasks);
    expect(global.localStorage.setItem).toHaveBeenCalledWith('tasks', JSON.stringify(tasks));
  });
});

describe('loadTasksFromLocalStorage function', () => {
  it('should load tasks from localStorage', () => {
    const tasks = [{ description: 'Task 1', completed: false }];
    global.localStorage.getItem.mockReturnValueOnce(JSON.stringify(tasks));
    loadTasksFromLocalStorage();
    expect(getTasks()).toEqual(tasks);
  });
});

describe('handleNewTask function', () => {
  it('should add a new task', () => {
    document.body.innerHTML = `
        <div id="app">
          <input id="task-input" value="New task" />
          <ul id="todo-list"></ul>
        </div>
      `;

    const taskInput = document.getElementById('task-input');
    const todoList = document.getElementById('todo-list');

    handleNewTask(taskInput, populateTodoList, getTasks, setTasks);

    expect(todoList.children.length).toBe(1);
    expect(todoList.children[0].textContent).toContain('New task');
  });
});
