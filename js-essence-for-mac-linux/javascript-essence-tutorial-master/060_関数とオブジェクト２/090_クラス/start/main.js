// クラス：コンストラクター関数をクラス表記でかけるようにしたもの、ES6からこの表記ができるようになった
class Person {
  // コンストラクター関数内で定義したプロパティはconstructor関数を使って定義する
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // prototypeに定義したメソッドはそのままクラス内で定義する
  hello() {
    console.log('hello ' + this.name);
  }
}
const bob = new Person('Bob', 23);

// ↑クラス表記に変更
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.hello = function() {
//   console.log('hello ' + this.name);
// }