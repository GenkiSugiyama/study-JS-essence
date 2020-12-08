
// 普通の関数宣言と実行
function a(){
  console.log('a is called');
}

a();

// 即時関数の宣言と実行
let c = (function(){
  console.log('c is called');
  // 関数式で定義した場合、returnの内容が変数に格納される
  return 0;
})()
console.log(c);

// 即時関数の使用例
// 関数外で使用する変数関数と関数内でのみ使用する変数関数を明確に切り分けたい時に使用する
let b = (function(){
  console.log('b is called')
  let privateVal = 0;
  let publicVal = 10;

  function privateFn(){
    console.log('pribateFn is called');
  }
  function publicFn() {
    console.log('publicFn id called ' + privateVal++);
    privateFn();
  }

  // returnされるpublicValとpublicFnのみ外部から参照可能
  // privateValとprivateFnは即時関数が実行される一度のみ呼び出され初期化される
  return {
    publicVal,
    publicFn
  };
})()

console.log(b.publicVal);
b.publicFn();
b.publicFn();
b.publicFn();
b.publicFn();

