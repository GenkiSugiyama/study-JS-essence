// AND条件：&& → 一番左辺の値からtruthyかfalsyかを確認していく、falsyな値が見つかった時点でその値を返す。
// 全てtruthyの値なら最右辺の値を返す
let a = 0;
let b = 1;
console.log(a && b); // 左辺のaがfalsyなのでそのままaの値を返す
a = 5;
console.log(a && b); // どちらもtruthyなので最右辺bの値を返す
// OR条件：|| → 一番左辺の値からtruthかどうかを確認。truthyな値が見つかったタイミングでその値を返す