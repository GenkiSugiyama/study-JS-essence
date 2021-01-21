// Async：Promiseを返却する関数を宣言する
// Await：Promiseを返却する関数(Async)の非同期処理が完了するまで待つ
// function sleep(val) {
//   return new Promise(function(resolve) {
//     setTimeout(function() {
//       console.log(val++);
//       resolve(val);
//     }, 1000);
//   });
// }

// sleep(0).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// })

function sleep(val) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

// async関数自体もPromiseのインスタンスとなっている（thenメソッドで処理をつなげることもできる）
async function init() {

  // awaitはasync関数内でしか使用できない、awaitで非同期処理を待っている間でもasync関数外の同期処理は停止せずに処理が進む
  let val = await sleep(0);
  // ↑awaitをつけた関数はその関数がreturnで返すPromiseインスタンス内のコールバック関数内のresolveの実引数を戻り値として返す
  // →上記のvalにはsleep関数実行時のresolveの引数であるvalの値が渡される
  console.log(val);
  console.log('hello'); // await式は非同期、awaitより下のconsole.logは同期処理だがawait式は非同期処理を実行して完了しするまで次の行を実行しないためconsole.logはawait式の後に実行される
  // →await式を使うことで通常の同期処理のような流れでコードを書くことができる
  return val; // async関数内で返却される値がthenのコールバック関数の引数として使用可能
}

init().then(function(val){
  setTimeout(console.log(val), 1000);
  
});

Promise.resolve(1).then((value) => {
  console.log(value); // => 1
  return value * 2;
}).then(value => {
  console.log(value); // => 2
  return value * 2;
}).then(value => {
  console.log(value); // => 4
  // 値を返さない場合は undefined を返すのと同じ
}).then(() => {
  console.log(value); // => undefined
});
