/**
 * 問題：
 * Person.helloメソッドをsetTimeoutで１秒後に
 * 実行しようとしましたが、"hello Bob"と表示されませんでした。
 * 
 * setTimeoutに渡す方法がおかしそうなのですが、
 * どのようにすればよいでしょうか？
 * 
 * ※２通りの方法で実装してみてください。
 */
class Person {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }

  hello() {
      console.log('hello ' + this.name);
      return `hello ${this.name}`
  }
}

const bob = new Person('Bob', 23);

// 1.bindでthisをbobで再度固定した上で実行する
setTimeout(bob.hello.bind(bob), 2000);

// ×：コールバック関数として呼ばれた場合のthisは親関数実行時のレキシカルスコープとなり、setTimeout実行時のレキシはwindowオブジェクトなのでwindowオブジェクトのプロパティにnameを加える → window.name = "Bob";
// ○：オブジェクトのメソッドはコールバック関数内で呼ばれた場合オブジェクト経由の実行ではなく、関数としての実行となるのでthisの参照元がオブジェクトではなくなる
// →自身の中でオブジェクト経由のhelloメソッドを実行する無名関数をsetTimeoutの第一引数として渡す
setTimeout(function() {
  return bob.hello();
}, 1000);

