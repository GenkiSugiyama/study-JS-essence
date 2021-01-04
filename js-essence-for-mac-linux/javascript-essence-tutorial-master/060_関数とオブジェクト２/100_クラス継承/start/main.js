// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.hello = function() {
//   console.log('hello ' + this.name);
// }
// ↓クラス化
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log("hello " + this.name);
  }
}

// クラス記法での継承は「class 継承先クラス extends 継承元クラス」と表記する
// extendsで継承元クラスのprototypeまでコピーされる
class Japanese extends Person {
  constructor(name, age, gender) {
    // 初期化のコンストラクターで継承元をそのまま使うときはsuperメソッドを使用する
    super(name, age);
    this.gender = gender;
  }

  hello() {
    console.log('Konnichiwa ' + this.name);
  }

  bye() {
    console.log('Sayonara ' + this.name);
  }
}

// function Japanese(name, age, gender) {
//   Person.call(this, name, age);
//   this.gender = gender;
// }

// Japanese.prototype = Object.create(Person.prototype);

// Japanese.prototype.hello = function() {
//   console.log('Konnichiwa ' + this.name);
// }

// Japanese.prototype.bye = function() {
//   console.log('Sayonara ' + this.name);
// }

const taro = new Japanese('Taro', 23, 'Male');
console.log(taro);
taro.bye();