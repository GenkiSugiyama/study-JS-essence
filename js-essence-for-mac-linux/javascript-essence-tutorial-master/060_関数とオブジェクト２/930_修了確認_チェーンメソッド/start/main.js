/**
 * 問題：
 * 電卓の入力と同じような挙動をするチェーンメソッド
 * を作成してみましょう。
 * 
 * 例えば、次のように使用し、結果が表示
 * されるようにします。
 * 
 * 
 * 例１）
 * const calc = new Calculator();
 * 
 * calc.set(10)
 * .minus()
 * .set(3) -> '7'を出力(10 - 3)
 * 
 * 例２）
 * const calc = new Calculator();
 * 
 * calc.set(10)
 * 	.minus()
 * 	.set(3) -> '7'を出力
 * 	.mutiply()
 * 	.set(6) -> '42'を出力（10 - 3) * 6
 */

 class Calculator {
	constructor() {
		// this.num;
		// this.operator;

		this.val = null;
		this._operator;
	}

	set(num) {
		// if(this.operator) {
		// 	result = `${this.num} ${this.operator} ${num}`;
		// 	console.log(result);
		// 	return result;
		// } else {
		// 		console.log(num);
		// 		return num;
		// }

		if(this.val === null) {
			this.val = num;
		} else {
			this._operator(this.val, num);
		}
		return this;
	}

	plus() {
		// this.operator = "+";
		// return this.operator;
		this._operator = function(val1, val2) {
			const result = val1 + val2;
			this._equal(result);
		}
		return this;
	}

	minus() {
		// this.operator = "+";
		// return this.operator;
		this._operator = function(val1, val2) {
			const result = val1 - val2;
			this._equal(result);
		}
		return this;
	}

	multiply() {
		// this.operator = "+";
		// return this.operator;
		this._operator = function(val1, val2) {
			const result = val1 * val2;
			this._equal(result);
		}
		return this;
	}

	divide() {
		// this.operator = "+";
		// return this.operator;
		this._operator = function(val1, val2) {
			const result = val1 / val2;
			this._equal(result);
		}
		return this;
	}

	_equal(result) {
		this.val = result;
		console.log(result)
	}

	// minus() {
	// 	// this.operator = "-";
	// 	// return this.operator;

	// 	return this;
	// }

	// multiply() {
	// 	// this.operator = "*";
	// 	// return this.operator;

	// 	return this;
	// }

	// multiply() {
	// 	// this.operator = "/";
	// 	// return this.operator;

	// 	return this;
	// }
 }

const calc = new Calculator();

calc.set(10)
	.minus()
	.set(3)
	.multiply()
	.set(6)
	.divide()
	.set(2)
	.plus()
	.set(2)
