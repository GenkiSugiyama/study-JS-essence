// コンストラクター関数：新しくオブジェクトを作成するための雛形となる関数
// 通常の関数と明確に差別化するために関数名の頭文字を大文字で定義する
function Person(name, age) {
  // インスタンス化を行った時にインスタンスとして生成されたオブジェクトに持たせたいプロパティを「this.prop = 引数」というような形で定義する
  this.name = name;
  this.age = age;
}

// オブジェクトを作る際にはnew演算子を使ってインスタンス化させる
const bob = new Person('Bob', 18);

console.log(bob.name,bob.age)