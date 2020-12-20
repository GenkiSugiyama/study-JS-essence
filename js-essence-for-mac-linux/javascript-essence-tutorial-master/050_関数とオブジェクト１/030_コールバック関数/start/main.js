// コールバック関数：他の関数に引数として渡される関数
function hello(name) {
  console.log('hello ' + name);
}

function bye(name) {
  console.log('bye ' + name);
}

function fn(cb) {
  cb("Tom");
}

// hello関数をfn関数の引数として渡している
// fn関数内で関数実行が記述されているタイミングで関数が実行される
fn(hello);
fn(bye);
fn(function(name) {
  console.log('元気ですか ' + name);
});

// コールバックがなぜ有用か
// →コールバック関数によって一部の処理を使いまわしやすくするため
// 多用する処理を1関数設定しておきsetTimeoutのように別の関数の引数でコールバック関数として
// 使う事でいろいろな場所で使えるようになる
setTimeout(hello, 2000);