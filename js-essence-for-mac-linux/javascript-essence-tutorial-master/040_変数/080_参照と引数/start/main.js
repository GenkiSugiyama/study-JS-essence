let a = 0;
function fn1(arg1) {
  // 関数の引数としてプリミティブ型の変数を受け取った場合も
  // コピー元が参照する値のコピーが渡されるのでそれぞれの値は独立している
  arg1 = 1;
  console.log(a, arg1);
}

fn1(a);

let b = {
  prop: 0
}

function fn2(arg2) {
  // オブジェクト型の変数コピーは「オブジェクトへの参照」をコピーするだけで実際のオブジェクトや値は共有している
  // そのためコピー先でプロパティの値へ変更があった場合はコピー元も影響をうける
  arg2.prop = 1;
  console.log(b, arg2);
}

fn2(b);

function fn3(arg2) {
  // オブジェクト型の変数コピーは「オブジェクトへの参照」をコピーするだけで実際のオブジェクトや値は共有している
  // コピー先に新しいオブジェクトを渡すとコピー先のみ新しいオブジェクトを参照する様になるので互いに独立する
  arg2 = {};
  console.log(b, arg2);
}

fn3(b);
