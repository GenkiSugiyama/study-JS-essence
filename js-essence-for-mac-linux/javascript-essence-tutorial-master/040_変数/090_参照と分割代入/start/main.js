// 分割代入：オブジェクトから特定のプロパティーを抽出して宣言する

// オブジェクトの宣言
const a = {
  prop: 0
}

// 分割代入の実装
// 分割代入を行う場合は変数名をオブジェクトのプロパティ名に合わせる
// 変数名に指定したプロパティが持つ値のコピーが新しい変数に渡される
let { prop } = a; //宣言時はaが参照するオブジェクトが持つ値のコピーが変数propに渡される
// 名前を変えたい場合は{元のプロパティ名：新しい変数名}とする
console.log(prop);
prop =  1; //propのみが参照している値が変更するので元のオブジェクトaには影響なし

function fn(obj) {
  let { prop } = obj;
  prop = 1;
  console.log(prop, obj);
}

fn(a);

// オブジェクトが多階層の場合の分割代入
const c = {
  prop1: {
    prop2: 0
  }
}

// プロパティprop1は値にオブジェクトを持つのでこれをを抽出する場合、コピー先に渡されるのはprop1が持つ「オブジェクトへの参照」
// つまり変数prop1とオブジェクトcのプロパティprop1は同じオブジェクト、値を参照（共有）しており互いに影響し合う
let {prop1} = c;
console.log(c, prop1);
// {
//   prop1.prop2 = 2;
//   console.log(c, prop1);
// }
prop1.prop2 = 2;
console.log(c, prop1);

