export class TodoContext {
  constructor() {
    this.tasks = [];
    this.listeners = [];
    this.id = 0;
  }

  getTasks() {
    return this.tasks;
  }

  addTask(text) {
    this.tasks.push({
      id: ++this.id,
      text,
      completed: false
    });
    this.emit();
  }

  toggleTask(id) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.emit();
    }
  }

  removeTask(id) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.emit();
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  emit() {
    this.listeners.forEach(l => l());
  }
}

// 싱글톤으로 export
export const todoContext = new TodoContext();
