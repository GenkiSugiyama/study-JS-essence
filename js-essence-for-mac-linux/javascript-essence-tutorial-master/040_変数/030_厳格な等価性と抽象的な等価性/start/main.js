// 厳格な等価性の比較 a === b （イコール3つ）：型の比較まで行う
// 抽象的な透過性 a == b （イコール2つ）：型の比較なし
// 抽象的な等価性の判断時には右辺と左辺の型を合わせる作業が発生する（暗黙的な型変換）
// 抽象的な型変換 = 暗黙的な型変換が行われた後厳格な等価性が判断される
function printEquality(a, b) {
  console.log(a === b); 
  console.log(a == b);
}

// 数値と文字列の比較
let a = '1';
let b = 1;
// printEquality(a, b); // 厳格的にはfalse、抽象的にはtrue
// console.log(a === b); //文字列と数値なのでfalse
// console.log(a == b);

// 数値と審議値の比較
let c = true;
// printEquality(b, c); // 厳格的にはfalse、抽象的にはtrue
// console.log(c === Boolean(b));
// 数値は原則trueに変換されるが0はfalseになる

// 空文字と数値0の比較
let e = '';
let f = 0;
// printEquality(e, f); // 厳格的にはfalse、抽象的にはtrue
// 数値の0と空文字はいずれもは真偽値のfalseに変換されるので抽象的な等価性ではtrueになる

// nullと未定義（undefined）の比較
let g = null;
let h;
// printEquality(g, h); // 厳格的にはfalse、抽象的にはtrue

// 空文字とnullの比較
// printEquality(e, g); //厳格的にも抽象的にもfalse

// 0とnullの比較
// printEquality(f, g); //厳格的にも抽象的にもfalse

// 空文字とundefinedの比較
printEquality(e, h); //厳格的にも抽象的にもfalse

// 空文字とundefinedの比較
printEquality(f, h); //厳格的にも抽象的にもfalse




