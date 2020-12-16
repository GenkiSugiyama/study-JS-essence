// プリミティブ型の参照とコピー
let a = "hello";
let b = a;
console.log(a, b); // bは「aが参照している値のコピー」を参照しているのでどちらも同じ値が返ってくる
b = "bye";
console.log(a, b); // bの参照先の値が書き換えられたので「aはそのまま、bは書き換え後の値」となる

// オブジェクト型の参照とコピー
let c = {
  prop: "hello"
}
let d = c;
console.log(c, d); //dはcと同じ「オブジェクトへの参照」を保持することになるので
d.prop = "bye";
console.log(c,d)