// ジェネレーター：イテレーターを生成するための特殊な関数
// 前の講座でやったgenIterator関数よりも楽にイテレーターを実装できる
// 「function* 関数名〜」という定義と関数内ではyieldという命令を使って値を返す
// function* gen() {
//   yield 1;
//   yield 2;
//   return 3;
// }

// const it = gen();
// // console.log(it);
// for(let i of it) {
//   console.log(i);
// }

function* genIterator(max = 10){
  let i = 0;

  while(i < max) {
    yield i++;
  }
  return;
}

const it = genIterator(10);
let a = it.next();
while(!a.done) {
  console.log(a.value);
  a = it.next();
}