import { TodoListModel } from "./model/TodoListModel.js";
import { TodoItemModel } from "./model/TodoItemModel.js";
import { TodoListView } from "./view/TodoListView.js";
import { render } from "./view/html-util.js"

console.log("App.js: loaded");
export class App {
  // App.jsが読み込まれたタイミングでtodolistの初期化
  constructor() {
    this.todoListModel = new TodoListModel();
    this.todoListView = new TodoListView();
  }

  handleAdd(title) {
    if(title){
      this.todoListModel.addTodo(new TodoItemModel({ title: title, complsted: false }));
    } else {
      console.error("何かタスクを入力してくだああああさい");
    }
  }

  handleUpdate({ id, completed }) {
    this.todoListModel.updateTodo({ id, completed });
  }

  handleDelete({ id }) {
    this.todoListModel.deleteTodo({ id });
  }

  // 初回App.jsが読み込まれたときの初期化処理
  mount() {
    const formElement = document.querySelector("#js-form");
    const inputElement = document.querySelector("#js-form-input");
    const containerElement = document.querySelector("#js-todo-list");
    const todoItemCountElement = document.querySelector("#js-todo-count");
    // onChange関数で変更時に実行されるリスナーを登録しておく
    this.todoListModel.onChange(() => {
      const todoItems = this.todoListModel.getTodoItems();
      const todoListView = new TodoListView();

      const todoListElement = todoListView.createElement(todoItems, {
        onUpdateTodo: ({ id, completed }) => {
          this.handleUpdate({ id, completed });
        },
        onDeleteTodo: ({ id }) => {
          this.handleDelete({ id });
        }
      })

      render(todoListElement, containerElement);

      todoItemCountElement.textContent = `todoアイテム数：${this.todoListModel.getTotalCount()}`;
    });

    formElement.addEventListener("submit", (event) => {
      event.preventDefault();

      // submitがリッスンされたタイミングでitems配列に新しいTodoアイテムを追加&上のonChangeで登録したリスナーを実行
      this.handleAdd(inputElement.value);
      inputElement.value = "";
    });
  }
}