/**
 * 問題：
 * 四則演算を行うメソッドを持ったオブジェクトを
 * クロージャーを用いて作成してみてください。
 *
 * 四則演算を行うメソッド（plus, minus, multiply, divide）
 * を実行すると以下のようにコンソールに出力されます。
 *
 * const calc = calcFactory(10); // 初期値を10として設定
 * calc.plus(5);      // 出力結果 "10 + 5 = 15"
 * calc.minus(3);     // 出力結果 "15 - 3 = 12"
 * calc.multiply(3);  // 出力結果 "12 x 3 = 36"
 * calc.divide(2);    // 出力結果 "36 / 2 = 18"
 *
 * ※前に行った計算結果をもとに四則演算を行います。
 * ※四則演算は"+","-","*","/"を数値ではさんで計算を行います。
 */

function calcFactory(num1) {
  // num1がそれぞれの関数からみたレキシカルスコープになるので
  // わざわざFactoryブロック内で新しい変数定義は必要なし

  function plus(num2) {
    // num = num1 + num2;
    // console.log(num1 + " + " + num2 + " = " + num);
    // return num;
    let result = num1 + num2;
    console.log(num1 + " + " + num2 + " = " + result);
    // 次の計算関数で計算結果を使用するためレキシカルスコープに計算結果を格納
    num1 = result;
  }

  function minus(num2) {
    let result = num1 - num2;
    console.log(num1 + " - " + num2 + " = " + result);
    num1 = result;
  }

  function multiply(num2) {
    // num = num * num4;
    // console.log(num);
    // return num;
    let result = num1 * num2;
    console.log(num1 + " * " + num2 + " = " + result);
    num1 = result;
  }

  function divide(num2) {
    // num = num / num5;
    // console.log(num);
    // return num;
    let result = num1 / num2;
    console.log(num1 + " / " + num2 + " = " + result);
    num1 = result;
  }

  return {
    plus,
    minus,
    multiply,
    divide
  }
}

const calc = calcFactory(10);
calc.plus(5);
calc.minus(3);
calc.multiply(3);
calc.divide(2);