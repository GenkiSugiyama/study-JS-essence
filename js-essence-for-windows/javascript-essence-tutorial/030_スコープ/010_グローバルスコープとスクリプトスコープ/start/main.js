// スコープ：実行中のコードから値と式が参照できる範囲
// グローバルスコープ = Windowオブジェクト
// let constで定義した変数はスクリプトスコープとして格納される
let a = 0;
const d = 0;
// varや関数定義したオブジェクトはグローバルオブジェクトのWindowおぶじぇくとのプロパティとして格納される
// console.log(b)でもconsole(window.b)でも呼び出せる
var b = 0;
function c() {}
console.log(window.b)
debugger;
// 一般的にはスクリプトスコープもグローバルスコープと呼ばれることもある