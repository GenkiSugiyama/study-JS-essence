// プロトタイプチェーン：プロトタイプが多重形成sれたもの
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.hello = function() {
    console.log('OwnProperty: hello ' + this.name);
  }
}

Person.prototype.hello = function() {
  console.log('Person: hello ' + this.name);
}

// Objectオブジェクトは全てのオブジェクトの基本オブジェクトであるため
// 作成するオブジェクト全てに共通する性質／機能を提供する
Object.prototype.hello = function() {
  console.log('Object: hello ' + this.name);
}

const bob = new Person('Bob', 18);
// PersonのインスタンスとなるbobにはPersonのprototypeとObjectのprotoptypeがコピーされている（プロトタイプチェーンが生成されている）
// 同名のメソッドが各オブジェクトで定義されている場合は、浅い階層で定義されているメソッドから優先的に処理される
bob.hello();
// 今回の場合はPersonオブジェクトのメソッドとしてhelloが定義されているので「OwnProperty: hello ' + this.name」が表示される