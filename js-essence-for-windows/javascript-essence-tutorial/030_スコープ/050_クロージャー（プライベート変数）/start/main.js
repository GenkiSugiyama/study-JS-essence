// クロージャー

function incrementFactory() {
  // icrementFactory内で使用する変数を初期化する
  let num = 0;

  function increment() {
    num = num + 1;
    console.log(num);
  }

  return increment;
}

// グローバル変数にincrementFactory関数の実行を代入する
// incrementFactory()の宣言時にnumの初期化が行われる
const increment = incrementFactory();

// 上記のincrement変数は関数が返ってきているので()をつけて実行することで
// incrementFactory関数の戻り値であるincrement関数の実行結果が返ってくる
increment();
increment();
increment();