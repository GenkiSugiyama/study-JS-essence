// html-util.jsからelement関数をインポート
import { element } from "./view/html-util.js";

console.log("App.js: loaded");
export class App {
  mount() {
    const formElement = document.querySelector("#js-form");
    const inputElement = document.querySelector("#js-form-input");
    const containerElement = document.querySelector("#js-todo-list");
    const todoItemCountElement = document.querySelector("#js-todo-count");
    let todoItemCount = 0;
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log(`入力欄の値：${inputElement.value}`);
      const todoItemElement = element`<li>${inputElement.value}</li>`;
      containerElement.appendChild(todoItemElement);
      todoItemCount += 1;
      todoItemCountElement.textContent = `Todoアイテム数： ${todoItemCount}`;
      inputElement.value = "";

    })
  }
}

import { EventEmitter } from "./EventEmitter.js";
const event = new EventEmitter();
// イベントリスナー（コールバック関数）を登録
event.addEventListener("test-event", () => console.log("One!"));
event.addEventListener("test-event", () => console.log("Two!"));
// イベントをディスパッチする
event.emit("test-event");
// コールバック関数がそれぞれ呼びだされ、コンソールには次のように出力される
// "One!"
// "Two!"

import { TodoItemModel } from "./model/TodoItemModel.js";
const item = new TodoItemModel({
    title: "未完了のTodoアイテム",
    completed: false
});
const completedItem = new TodoItemModel({
    title: "完了済みのTodoアイテム",
    completed: true
});
// それぞれの`id`は異なる
console.log(item.id !== completedItem.id); // => true