import { Component } from "../common/Component.js";
import { todoContext } from "../contexts/TodoContext.js";

export class TodoItem extends Component {
  render() {
    const { task } = this.props;

    const todoElement = document.createElement("li");
    todoElement.className = task.completed ? "completed" : "";

    // 할 일 텍스트
    const span = document.createElement("span");
    span.textContent = task.text;

    // 완료/취소 버튼
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = task.completed ? "Mark Incomplete" : "Mark Complete";
    toggleBtn.addEventListener("click", () => {
      todoContext.toggleTask(task.id);
    });

    // 삭제 버튼
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      todoContext.removeTask(task.id);
    });

    todoElement.appendChild(span);
    todoElement.appendChild(toggleBtn);
    todoElement.appendChild(deleteBtn);

    return todoElement;
  }
}
