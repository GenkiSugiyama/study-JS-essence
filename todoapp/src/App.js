import { TodoListModel } from "./model/TodoListModel.js";
import { TodoItemModel } from "./model/TodoItemModel.js";
// html-util.jsからelement関数をインポート
import { element, render } from "./view/html-util.js";

console.log("App.js: loaded");
export class App {
  // App.jsが読み込まれたタイミングでtodolistの初期化
  constructor() {
    this.todoListModel = new TodoListModel();
  }
  mount() {
    const formElement = document.querySelector("#js-form");
    const inputElement = document.querySelector("#js-form-input");
    const containerElement = document.querySelector("#js-todo-list");
    const todoItemCountElement = document.querySelector("#js-todo-count");
    // onChange関数で変更時に実行されるリスナーを登録しておく
    this.todoListModel.onChange(() => {
      const todoListElement = element`<ul />`;
      const todoItems = this.todoListModel.getTodoItems();
      todoItems.forEach(item => {
        const todoItemElement = element`<li>${item.title}</li>`;
        todoListElement.appendChild(todoItemElement);
      });

      render(todoListElement, containerElement);

      todoItemCountElement.textContent = `todoアイテム数：${this.todoListModel.getTotalCount()}`;
    });

    formElement.addEventListener("submit", (event) => {
      event.preventDefault();

      // submitがリッスンされたタイミングでitems配列に新しいTodoアイテムを追加&上のonChangeで登録したリスナーを実行
      this.todoListModel.addTodo(new TodoItemModel({
        title: inputElement.value,
        completed: false
      }));

      inputElement.value = "";
    });
  }
}

// import { EventEmitter } from "./EventEmitter.js";
// const event = new EventEmitter();
// // イベントリスナー（コールバック関数）を登録
// event.addEventListener("test-event", () => console.log("One!"));
// event.addEventListener("test-event", () => console.log("Two!"));
// // イベントをディスパッチする
// event.emit("test-event");
// // コールバック関数がそれぞれ呼びだされ、コンソールには次のように出力される
// // "One!"
// // "Two!"

// import { TodoItemModel } from "./model/TodoItemModel.js";
// const item = new TodoItemModel({
//     title: "未完了のTodoアイテム",
//     completed: false
// });
// const completedItem = new TodoItemModel({
//     title: "完了済みのTodoアイテム",
//     completed: true
// });
// // それぞれの`id`は異なる
// console.log(item.id !== completedItem.id); // => true