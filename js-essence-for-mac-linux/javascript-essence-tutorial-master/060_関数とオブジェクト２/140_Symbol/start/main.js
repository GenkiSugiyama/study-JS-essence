// Symbol：プロパティの重複を避けるために必ず一意の値を返す関数
// プリミティブ型の1つ

// Symbol生成時はnew演算子を使用せず「Symbol(文字列)」と定義する
// ()内の文字列が同じシンボルを複数個作ってもそれぞれ別のシンボル（一意の値）として扱われる
const s = Symbol("hello");
const s2 = Symbol("hello");

console.log(s);
console.log(s2);
console.log(s === s2); // 結果はfalse

const str = new String('Tom');
console.log(str);

// Symbolは既存のビルトインオブジェクト内のメソッドとの重複を防ぐために実装されたもの
// JSエンジン実装者がよく使う記法だが、開発者はあまり使うことはない