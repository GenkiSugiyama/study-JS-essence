// プロトタイプ継承：別のコンストラクター関数のプロトタイプを受け継いで機能を流用できるようにすること
// コンストラクター関数間でプロトタイプを共有できる
// 継承：別のコンストラクター関数をそのまま受け継ぐこと
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function() {
  console.log('hello ' + this.name);
}

function Japanese(name, age) {
  // 継承
  // 継承元のthisを継承先オブジェクト内のthisで束縛し、引数には継承先コンストラクター関数に必要な引数を指定する
  Person.call(this, name, age);
}

// プロトタイプ継承
// createメソッドを使ってあるコンストラクター関数のprototypeを別のコンストラクター関数に継承させる
Japanese.prototype = Object.create(Person.prototype);

const person = new Person("Tom", 18);
console.log(person.name);
person.hello();

// プロトタイプ継承だけ行った場合は、prototypeオブジェクト内で定義されたメソッドは使用できるが
// 継承元オブジェクトのプロパティは継承できていないのでnameやageはundefinedとなる
const japanese = new Japanese("genki", 22);
console.log(japanese);
console.log(japanese.name);
japanese.hello();

