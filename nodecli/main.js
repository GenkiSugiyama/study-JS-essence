// CommonJSモジュールではrequire関数にインポートしたいモジュールのファイルバスを渡す
// require関数ではnpmでインストールしたパッケージ名で指定も可能（npmでインストールしたパッケージはnode_moduleディレクトリ配下にある）
const myModule = require("./my-module");
const program = require("commander");
console.log(myModule.foo);