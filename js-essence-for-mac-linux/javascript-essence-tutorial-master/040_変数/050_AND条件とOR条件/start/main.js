// AND条件：&& → 一番左辺の値からtruthyかfalsyかを確認していく、falsyな値が見つかった時点でその値を返す。
// 全てtruthyの値なら最右辺の値を返す
let a = 0;
let b = 1;
let c = 3;
let d = 0;
console.log(a && b); // 左辺のaがfalsyなのでそのままaの値を返す

console.log(a && b); // どちらもtruthyなので最右辺bの値を返す

// OR条件：|| → 一番左辺の値からtruthかどうかを確認。truthyな値が見つかったタイミングでその値を返す。truthyな値が見つからなかったら最後の値を返す
console.log(a || b || c); //bが1でtruthyなのでbの値を返している

// ANd条件とOR条件の混合
// 2つい上の条件式が並ぶ場合はグループ化を行い分かりやすい表現にする
console.log((a || b) && c)