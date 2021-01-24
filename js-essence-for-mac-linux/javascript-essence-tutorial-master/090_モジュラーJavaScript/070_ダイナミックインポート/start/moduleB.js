// import(path)で非同期にモジュールファイルを読み込む
// import関数はPromiseを返すのでthenメソッドでそのあとの処理を続ける
// import('./moduleA.js').then(function(module){
//   console.log(module);
//   module.publicFn();
// })

(async function fn() {
  const module = await import('./moduleA.js');
  console.log(module);
  module.publicFn();
  console.log(module.publicVal);
})();
