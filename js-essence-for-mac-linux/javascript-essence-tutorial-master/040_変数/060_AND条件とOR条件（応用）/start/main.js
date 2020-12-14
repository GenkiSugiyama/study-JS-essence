function hello(name) {
  // 引数が指定されている関数を実行する時に引数を指定しないと
  // 下記の例だと「Hello undefined」となってしまう
  // if文やOR条件を使うことで引数がfalsyな場合の引数の初期値を設定できる
  // 下記のif文とOR条件は同じことをしている
  // if (!name) {
  //   name = "Tom"
  // }
  // OR条件を使って初期値を設定する際の注意点
  // 数値を格納したい場合、OR条件で設定を行うと、引数が0の場合はfalsyとみなされ
  // 渡した引数ではなく初期値が設定されてしまう。
  name = name || "Tom";
  console.log('Hello ' + name);
}

hello();

// AND条件の応用例
let name = "Bob";
// nameがtruthyな場合にのみhello関数を実行する
name && hello(name);