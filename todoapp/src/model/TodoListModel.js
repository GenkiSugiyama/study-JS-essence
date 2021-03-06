import { EventEmitter } from "../EventEmitter.js";

export class TodoListModel extends EventEmitter {
  constructor(items = []) {
    super();
    this.items = items;
  }

  // TodoItemの合計数
  getTotalCount() {
    return this.items.length;
  }

  // 表示できるTodoItemの配列を返す
  getTodoItems() {
    return this.items;
  }

  onChange(listener) {
    this.addEventListener("change", listener);
  }

  emitChange() {
    this.emit("change");
  }

  addTodo(todoItem) {
    this.items.push(todoItem);
    this.emitChange();
  }

  updateTodo({ id, completed }) {
    const todoItem = this.items.find(todo => todo.id === id);
    if(!todoItem) {
      return;
    }
    todoItem.completed = completed;
    this.emitChange();
  }

  deleteTodo({ id }) {
    this.items = this.items.filter(todo => {
      return todo.id !== id;
    });
    this.emitChange();
  }
}