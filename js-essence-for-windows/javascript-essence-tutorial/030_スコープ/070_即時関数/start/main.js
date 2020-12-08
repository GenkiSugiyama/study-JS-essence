// 即時関数：関数定義と同時に一度だけ実行される関数
// 変数に代入した場合変数に格納されるのは関数そのものではなく返り値

function a() {
  console.log('called');
}

a();

// 即時関数を宣言する場合は関数を()で囲う
// その後ろに関数実行のための()をつける
// (function(仮引数) {
//   実行用の処理（仮引数）があればそれ使いながら
// })(実引数)←実行用の()の中に実引数を入れる
(function(ex) {
  console.log('called ' + ex);
})('Hello')

