function Person(name, age) {
    this.name = name;
    this.age = age;
}

Object.prototype.hello = function() {
    console.log('Object: hello ' + this.name);
}

const bob = new Person('Bob', 18);
// hasOwnProperty：あるプロパティをオブジェクト自身が持っているかどうかを判定する（__proto__以下のメソッドはfalse扱い）
const resultOwn = bob.hasOwnProperty("hello"); // オブジェクト自身ではなく__proto__内で継承したメソッドのためfalse
console.log(resultOwn)
// in ：あるプロパティをオブジェクトが持つ or __proto__に含まれているかを判定する（プロトタイプチェーンを遡ってプロパティを探す）
console.log("hello" in bob); // __proto__内で所有しているのでtrue