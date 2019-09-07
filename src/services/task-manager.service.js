class TaskManagerService {
  constructor() {
    this.ls = window.localStorage;
    this.tasks = [];
  }

  get() {
    this.tasks = JSON.parse(this.ls.getItem('turtlemint')) || [];
    return this.tasks;
  }

  addTask(newTask) {
    newTask.id = this.tasks.length + 1;
    this.ls.setItem('turtlemint', JSON.stringify([...this.tasks, newTask]));
  }

  delete(id) {
    const updateTasks = this.tasks.filter(task => task.id !== id);
    this.ls.setItem('turtlemint', JSON.stringify(updateTasks));
  }
}

const taskManager = new TaskManagerService();
export default taskManager;

// getTask(id) {
//   return {
//     id: id,
//     name: `Task ${id}`,
//     dueDate: new Date(2019, 11, id),
//     status: id,
//     priority: id,
//     createdAt: 'Pune',
//   };
// }
