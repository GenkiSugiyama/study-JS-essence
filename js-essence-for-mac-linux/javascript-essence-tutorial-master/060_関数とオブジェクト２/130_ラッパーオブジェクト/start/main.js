// ラッパーオブジェクト：プリミティブ値を内容するオブジェクト
const a = new String('hello'); //文字列（プリミティブ値）を内包したStringオブジェクトのラッパーオブジェクトが生成される
console.log(a.toUpperCase()); // ビルトインオブジェクトもプロトタイプチェーンが有効なのでコンストラクターのprototype内に用意されたメソッドを使用できる

// const b = new Number(100);
// 通常プリミティブ値の宣言時は↑の書き方はせず、値をそのまま代入しても暗黙的にラッパーオブジェクトが呼ばれてメソッドにアクセスできる
const b = 100
console.log(b.toExponential());