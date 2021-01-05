class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	hello(person) {
		console.log(`${this.name} says hello ${person.name}`);
		return this;
	}

	introduce() {
		console.log(`Hi, I'm ${this.name}, ${this.age} years old.`);
		return this;
	}

	shakeHands(person) {
		console.log(`${this.name} shake hands with ${person.name}.`);
		return this;
	}

	bye(person) {
		console.log(`Goodbye, ${person.name}.`);
		return this;
	}
}

const bob = new Person('Bob', 23);
const tim = new Person('Tim', 33);

// 下記のように1行づつ別のメソッド呼び出しではなく、連続した処理の場合チェーンメソッド化すると1つのオブジェクトに対して連続してメソッドを呼び出すことができるようになる。
// bob.hello(tim);
// bob.introduce();
// bob.shakeHands(tim);
// bob.bye(tim);

// メソッドに繋げてメソッドを実行する場合は繋ぎ先のメソッドが参照すべきオブジェクトを繋ぎ元のメソッド内の返り値で渡してあげる
bob.hello(tim)
	.introduce()
	.shakeHands(tim)
	.bye(tim);