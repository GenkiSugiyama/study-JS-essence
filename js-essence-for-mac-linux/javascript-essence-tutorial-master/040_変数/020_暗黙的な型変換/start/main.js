// JSは動的型付け言語：状況によって変数の型が変更される（暗黙的な型変換）
// 動的型付け言語のメリット：コード量が少なくなる傾向があるため小規模PJに向いている
// 静的型付け言語のメリット：PJが大きくなると変数の型が追えなくなるため静的型付け言語が向いている
function printTypeAndValue(val) {
  console.log(typeof val, val);
}
let a = 0;
printTypeAndValue(a)

let b = '1' + a;
printTypeAndValue(b); // →string 1
// aが自動的に文字列に変換され文字列の「10」が生成される

let c = 15 - b;
printTypeAndValue(c); // number 5
// マイナスの演算子は数値の計算式にしか使用されないため
// この場合はbが数値に変換される

let d = c - null;
printTypeAndValue(d); // number 5
// nullが数値の0に自動変換される

let e = d - true
printTypeAndValue(e); // number 4
// trueは数値計算に利用された場合数値の1に変換される

// 上記は暗黙的な変換だが、JSは明示的にも変換可能
let f = parseInt('1') + a;
printTypeAndValue(f); // number 1
// 文字列の「1」を明示的に数値に変換し計算を実行