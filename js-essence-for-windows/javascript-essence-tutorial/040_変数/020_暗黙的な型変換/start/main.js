// JSは動的型付け言語：状況によって変数の型が変更される（暗黙的な型変換）
// 動的型付け言語のメリット：コード量が少なくなる傾向があるため小規模PJに向いている
// 静的型付け言語のメリット：PJが大きくなると変数の型が追えなくなるため静的型付け言語が向いている
function printTypeAndValue(val) {
  console.log(typeof val, val);
}
let a = 1;
printTypeAndValue(a)
