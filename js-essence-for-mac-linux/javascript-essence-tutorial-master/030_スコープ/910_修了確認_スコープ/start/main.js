/**
 * 問題１：
 * 以下のコードではエラーが発生します。
 * コンソールで"fn called"と表示されるように
 * fn内のコードを変更してください。
 * 
 * ※if文は削除してはいけません。
 */
function fn() {
    if(true) {
        let a = 'fn called';
        return a; // ReferenceError: a is not defined
    }
}

const result = fn();
console.log(result);

/**
 * 問題２：
 * fn2内の記述を変更して、各コンソールで
 * 期待値を出力するように修正してください。
 */
var val = 'val1';
function fn2() {
    console.log(val); // 期待値->'val1'

    if(true) {
        const val = 'val2';
        console.log(val); // 期待値->'val2'
    }

    console.log(val); // 期待値->'val1'
}
fn2();

/**
 * 問題３：
 * 「クロージャー（プライベート変数）」のレクチャーで作成
 * したincrementと同じ機能を持つincrement関数をブロック
 * スコープとクロージャーを利用して作成してみてください。
 * 
 * increment(); // 期待値->1
 * increment(); // 期待値->2
 * increment(); // 期待値->3
 * increment(); // 期待値->4
 */
// function incrementFactory() {
//     let i = 0;

//     function plus() {
//         i ++;
//         console.log(i)
//     }

//     return plus();
// }

// const increment = incrementFactory();
// console.log(increment);
// increment();

// let、constはブロックスコープとなるが
// function（とvar）はブロックスコープとならないためグローバルに参照できる
// そのためブロック内でlet(const)で変数を初期化、functionの関数宣言で変数をいじる
// グローバルでその関数を実行すれば、変数の初期化はコード読み込み時のみ
// 関数によって編集された変数の値がそのまま維持されるということになる
{
    let num = 0;
    function increment() {
        num ++;
        console.log(num);
    }
}

increment();
increment();
increment();
increment();





