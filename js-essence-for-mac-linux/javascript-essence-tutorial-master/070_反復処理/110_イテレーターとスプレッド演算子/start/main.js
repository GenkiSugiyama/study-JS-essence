// スプレッド演算子：反復可能や列挙可能オブジェクトの展開を行う、可変長の引数が必要となる関数の仮引数によく使われる
const arry1 = [1,2,3,4,5];
const arry2 = [...arry1]; //新しい配列として作成される。コピー元とは別の配列
arry2.push(6); //arry2にだけ6が追加されている
console.log(arry1);
console.log(arry2);

function sum(...args) {
  let ret = 0;
  for(let v of args) {
    ret = ret + v; // ret += vと同義
  }
  return ret;
}

const result = sum(1,2,3,4);
console.log(result);

// イテレータとスプレッド演算子の関係
const items = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3'
}

Object.prototype[Symbol.iterator] = function* () {
	for(let key in this) {
		yield [key, this[key]];
	}
}

// スプレッド演算子を配列のリテラルの中で使用するとSymbol.iteratorの挙動に準じて指定のオブジェクトの配列化を行う
const arry3 = [...items];

// オブジェクトのリテラル内で使用された場合は
// const arry3 = {...items};
console.log(arry3)