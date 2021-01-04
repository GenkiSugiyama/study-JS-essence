// 関数コンストラクター
const fn1 = new Function('a', 'b', 'return a + b');

const result = fn1(1,2);
console.log(result);

function fn2(a,b) {
  return a + b;
}

console.log(fn1 instanceof Function);
console.log(fn2 instanceof Function);
