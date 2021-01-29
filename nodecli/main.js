// CommonJSモジュールではrequire関数にインポートしたいモジュールのファイルバスを渡す
// require関数ではnpmでインストールしたパッケージ名で指定も可能（npmでインストールしたパッケージはnode_moduleディレクトリ配下にある）
const program = require("commander");

// process.argvでコマンドライン引数へアクセス、それをparseメソッドに渡す
// parseメソッドでコマンドライン引数をパースした結果を取り出す（program.args内に配列の要素として格納される）
program.parse(process.argv);

const filePath = program.args[0];
console.log(filePath);