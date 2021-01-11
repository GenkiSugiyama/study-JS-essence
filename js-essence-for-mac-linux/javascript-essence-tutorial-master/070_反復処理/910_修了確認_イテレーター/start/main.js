/**
 * 問題：
 * 引数で与えた範囲の値をステップ毎に返却する
 * genStepというイテレーターを生成する関数を作成しましょう。
 * 
 * - genStepの要件
 * 引数にmin, max, stepを取ります。
 * min：下限値
 * max：上限値
 * step：ステップ
 * 
 * 以下のように実行した場合には
 * const it = genStep(4, 10, 2);
 * let a = it.next();
 * 
 * while(!a.done) {
 *  console.log(a.value); -> 4, 6, 8, 10
 *  a = it.next();
 * }
 * 
 * の値が順番にコンソールに表示されます。
 */

//  無限ループを防ぐために引数の初期値を設定しておくべし
function genStep(min, max, step) {
  let res = min - step;
  return {
    next() {
      res += step;
      // if(res >= max) {
      if (res > max) {
        return{
          done: true
        }
      } else {
        // res = res + step;
        return {
          done: false,
          value: res
        }
      }
    }
  }
}


const it = genStep(3, 10, 2);
let a = it.next();

while(!a.done) {
  console.log(a.value);
  a = it.next();
}