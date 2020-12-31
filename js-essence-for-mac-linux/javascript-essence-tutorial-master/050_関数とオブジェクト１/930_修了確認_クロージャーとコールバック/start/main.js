/**
 * 問題：
 * コールバックとクロージャーの仕組みを使って、
 * setTimeoutで1秒後に"hello Tom"と表示されるような
 * hello関数を作成してみましょう。
 * 
 * 条件としてはhello関数の引数には必ず
 * nameの引数を取るものとします。
 * 
 */
function hello(name) {
  // let name1 = name;

  // // なんでクロージャー内の関数に引数指定いらない？？
  // function hello1() {
  //   console.log('hello ' + name1);
  // }

  // return hello1;
  return function hello1() {
    console.log('hello ' + name);
  }
}

/**
 * 実行文は以下の通りです。
 */
setTimeout(hello('Tom'), 5000);