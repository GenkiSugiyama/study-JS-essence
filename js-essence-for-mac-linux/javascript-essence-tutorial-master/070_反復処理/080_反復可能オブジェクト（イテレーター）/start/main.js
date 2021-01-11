const items = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3'
}
// // 通常オブジェクトは一度配列に組みなおしてからでないとforof内で使えない
// const items = Object.entries(obj);
// for (let item of items) {
// 	console.log(item);
// }

// Objectのprototypeに[Symbol.iterator]を追加することで反復可能オブジェクトとなる
Object.prototype[Symbol.iterator] = function() {
	// 繰り返し処理を行うオブジェクトのキー全てを配列として取得する
	const keys = Object.keys(this);
	console.log(this)
	// カウント用の変数を定義
	let i = 0;
	// この関数の戻り値であるnextメソッド内でこの関数の呼び出し元であるオブジェクトをthisとして使用するための定義
	// next関数内で普通にthisを使うとnext関数が呼び出し元となるので×
	let _this = this;
	return {
		next() {
			console.log(this);
			let key = keys[i];
			i++;
			return {
				done: i > keys.length,
				value: [key, _this[key]],
			}
		}
	}
}

// const items = Object.entries(obj);
for (let item of items) {
	console.log(item);
}