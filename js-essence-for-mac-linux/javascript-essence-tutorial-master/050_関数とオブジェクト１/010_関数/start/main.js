
// 引数に初期値を設定しておく事ができる↓
// この場合、undefinedが渡された場合は初期値が優先されるが、nullが渡された場合はnullが優先される
// →意図的に空な値を渡したいときはnullを設定する
function fn(a, b=1) {
  // b = "入ってないよ！" if b == null || b == undefined
   if (b == null || b == undefined) b = "入ってないよ！";
  console.log(a, b);

  // arguments：関数実行時に渡される実引数が格納されている
  // 複数引数を取得する場合は配列として格納される
  // 可変長の引数を受け取る場合に使われていたが最近はレストパラメーターに取って代わられた
  console.log(arguments[1]);

  // return：returnの後に指定した値を関数の呼び出し元に返す
  // returnが指定されていたいとundefinedを返す
  // return a;
}

// fn(1, undefined);

// 下記は関数内のconsole実行時は関数内の処理が走るが、
// 関数を格納したc自体をconsoleで確認すると（fn内のreturnコメントアウト時）returnが指定されていないのでundefinedとなる
c = fn(3,4);
console.log(c);