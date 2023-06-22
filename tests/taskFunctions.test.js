import {
  getTasks,
  setTasks,
  saveTasksToLocalStorage,
  loadTasksFromLocalStorage,
  handleClearCompleted,
  handleNewTask,
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
    const tasks = [
      { description: 'Task 1', completed: true },
      { description: 'Task 2', completed: false },
    ];
    setTasks(tasks);

    const populateTodoListMock = jest.fn();
    handleClearCompleted(populateTodoListMock, getTasks, setTasks);

    expect(getTasks()).toEqual([{ description: 'Task 2', completed: false, index: 0 }]);
    expect(populateTodoListMock).toHaveBeenCalledWith([{ description: 'Task 2', completed: false, index: 0 }]);
  });
});

describe('handleNewTask function', () => {
  it('should add a new task and allow updating its description', () => {
    const taskInput = document.createElement('input');
    taskInput.value = 'New Task';

    const populateTodoListMock = jest.fn();
    const getTasksMock = jest.fn().mockReturnValue([]);
    const setTasksMock = jest.fn();

    handleNewTask(taskInput, populateTodoListMock, getTasksMock, setTasksMock);

    expect(setTasksMock).toHaveBeenCalledWith([
      { description: 'New Task', completed: false, index: 0 },
    ]);
    expect(taskInput.value).toBe('');
    expect(populateTodoListMock).toHaveBeenCalledWith([
      { description: 'New Task', completed: false, index: 0 },
    ]);
  });

  it('should not add a new task if the input is empty', () => {
    const taskInput = document.createElement('input');
    taskInput.value = '';

    const populateTodoListMock = jest.fn();
    const getTasksMock = jest.fn().mockReturnValue([]);
    const setTasksMock = jest.fn();

    handleNewTask(taskInput, populateTodoListMock, getTasksMock, setTasksMock);

    expect(setTasksMock).not.toHaveBeenCalled();
    expect(taskInput.value).toBe('');
    expect(populateTodoListMock).not.toHaveBeenCalled();
  });
});
