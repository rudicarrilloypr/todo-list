// statusUpdates.js
export function toggleTaskCompleted(task, populateTodoList, tasks, todoList) {
  task.completed = !task.completed;
  populateTodoList(tasks, todoList);
}

export function clearAllCompleted(populateTodoList, getTasks, setTasks, todoList) {
  let tasks = getTasks();
  tasks = tasks.filter((task) => !task.completed);
  setTasks(tasks);
  populateTodoList(tasks, todoList);
}
