import { Component } from "../common/Component.js";
import { todoContext } from "../contexts/TodoContext.js";

export class AddTodo extends Component {
  render() {
    const addElement = document.createElement("div");
    addElement.className = "add-todo";

    addElement.innerHTML = `
      <input type="text" id="todo-input" placeholder="Enter task details...">
      <button id="todo-add-btn">Add To Do</button>
    `;

    const input = addElement.querySelector("#todo-input");
    const btn = addElement.querySelector("#todo-add-btn");

    // 버튼 클릭 이벤트
    btn.addEventListener("click", () => {
      if (input.value.trim()) {
        todoContext.addTask(input.value);
        input.value = "";
      }
    });

    // Enter 키 이벤트
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && input.value.trim()) {
        todoContext.addTask(input.value);
        input.value = "";
      }
    });

    return addElement;
  }
}
