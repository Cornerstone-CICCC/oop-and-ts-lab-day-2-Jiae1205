import { Component } from "../common/Component.js";
import { AddTodo } from "./AddTodo.js";
import { TodoList } from "./TodoList.js";

export class App extends Component {
  render() {
    const container = document.createElement("div");
    container.className = "container";

    // 제목
    const title = document.createElement("h1");
    title.textContent = "My To Dos";
    container.appendChild(title);

    // AddTodo 추가
    const add = new AddTodo().render();
    container.appendChild(add);

    // TodoList 추가
    const todos = new TodoList().render();
    container.appendChild(todos);

    return container;
  }
}
