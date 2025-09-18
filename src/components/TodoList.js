import { Component } from "../common/Component.js";
import { TodoItem } from "./TodoItem.js";
import { todoContext } from "../contexts/TodoContext.js";

export class TodoList extends Component {
  render() {
    const container = document.createElement("div");
    container.className = "todo-list";

    const ul = document.createElement("ul");
    container.appendChild(ul);

    const renderItems = () => {
      ul.innerHTML = "";
      const tasks = todoContext.getTasks();

      if (tasks.length === 0) {
        ul.innerHTML = `<li class="empty">No todos yet</li>`;
        return;
      }

      tasks.forEach(task => {
        const item = new TodoItem({ task }).render();
        ul.appendChild(item);
      });
    };

    // 최초 렌더링
    renderItems();

    // 상태 구독
    todoContext.subscribe(renderItems);

    return container;
  }
}
