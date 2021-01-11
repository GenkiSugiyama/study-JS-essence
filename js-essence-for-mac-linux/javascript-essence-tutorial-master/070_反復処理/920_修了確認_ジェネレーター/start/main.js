/**
 * 問題：
 * 引数で与えた範囲の値をステップ毎に返却する
 * genStepというジェネレーター関数を作成しましょう。
 * 
 * - genStepの要件
 * 引数にmin, max, stepを取ります。
 * min：下限値
 * max：上限値
 * step：ステップ
 * 
 * 以下のように実行した場合には
 * const it = genStep({min: 4, max: 10, step: 2});
 * 
 * for(let value of it) {
 *   console.log(value); -> 4, 6, 8, 10
 * }
 * 
 * の値が順番にコンソールに表示されます。
 */

const it = genStep({min: 4, max: 10, step: 2});

// ↓のようにオブジェクトを引数にとる値は各プロパティの初期値、そもそも引数が渡されなかった場合の初期値としてのオブジェクトを
// 記載しておくことでエラーを防ぐ
// fuction* genStep({min = 0, max = 20, step = 1} = {}){

// }

function* genStep(obj) {
  let {min} = obj;
  let {max} = obj;
  let {step} = obj;
  let i = min;
  while(i <= max) {
    yield i;
    i += step;
  }
  // returnはあってもなくてもいい
  return;
}

for(let value of it) {
  console.log(value);
}