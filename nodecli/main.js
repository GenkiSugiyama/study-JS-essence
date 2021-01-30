// CommonJSモジュールではrequire関数にインポートしたいモジュールのファイルバスを渡す
// require関数ではnpmでインストールしたパッケージ名で指定も可能（npmでインストールしたパッケージはnode_moduleディレクトリ配下にある）
const program = require("commander");
// ファイルの読み書き機能を提供するfsモジュールをインポートする
const fs = require("fs");

// process.argvでコマンドライン引数へアクセス、それをparseメソッドに渡す
// parseメソッドでコマンドライン引数をパースした結果を取り出す（program.args内に配列の要素として格納される）
program.parse(process.argv);
const filePath = program.args[0];

// fsモジュールのメソッドは常にコールバック関数を受け取る（↓は第二引数にコールバック関数渡してる）
// コールバック関数の第一引数は必ずメソッドの処理内で起こるエラーオブジェクトとなり、残りの引数は返り値となる 
fs.readFile(filePath, { encoding: "utf8" },(err, file) => {
  // ファイルの読み書きはエラーが発生しやすいのでエラーハンドリング処理を書いておく
  if(err) {
    // エラーの場合はエラ〜メッセージを出力する
    console.error(err.message);
    // 終了ステータスに「1」を渡して処理を終了する
    process.exit(1);
    return;
  }
  // ファイルの中身をそのまま確認しようとすると文字列ではなくバイト列として保持しているので中身が確認できない
  // →readFile関数の第二引数にエンコードを指定することで文字列に変換された状態でコールバック関数に渡される
  console.log(file);
});
