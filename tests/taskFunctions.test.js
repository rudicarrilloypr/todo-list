import {
  getTasks,
  setTasks,
  saveTasksToLocalStorage,
  loadTasksFromLocalStorage,
  handleClearCompleted,
  populateTodoList,
} from '../src/taskFunctions.js';

beforeEach(() => {
  Object.defineProperty(global, 'localStorage', {
    value: {
      getItem: jest.fn(),
      setItem: jest.fn(),
      clear: jest.fn(),
    },
    writable: true,
  });
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

describe('handleClearCompleted function', () => {
  it('should remove completed tasks', () => {
    document.body.innerHTML = `
      <div class="container">
          <header>
              <h1>Today's to Do</h1>
              <button id="refresh-btn"><i class="fas fa-sync-alt"></i></button>
          </header>
          <div class="input-container">
              <input type="text" id="task-input" placeholder="Add to your list..." />
              <button id="enter-btn"><i class="fas fa-arrow-right"></i></button>
          </div>
          <ul id="todo-list">
              <li>
                  <div class="text-container">
                      <input type="checkbox" checked>
                      <span>Completed Task</span>
                  </div>
              </li>
              <li>
                  <div class="text-container">
                      <input type="checkbox">
                      <span>Incomplete Task</span>
                  </div>
              </li>
          </ul>
          <button id="clear-completed-btn">Clear all completed</button>
      </div>
      `;

    const todoList = document.getElementById('todo-list');

    // Mock getTasks function to return tasks from DOM
    const getTasks = () => {
      const tasks = [];
      const listItems = Array.from(todoList.children);

      listItems.forEach((item, index) => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        const span = item.querySelector('span');

        tasks.push({
          description: span.textContent,
          completed: checkbox.checked,
          index,
        });
      });

      return tasks;
    };

    handleClearCompleted(populateTodoList, getTasks, setTasks);

    expect(todoList.children.length).toBe(1);
    expect(todoList.children[0].textContent).not.toContain('Completed Task');
  });
});
