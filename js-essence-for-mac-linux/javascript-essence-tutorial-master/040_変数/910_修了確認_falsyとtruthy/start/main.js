/**
 * 問題１：
 * 以下のコンソールにはどのような値が表示されるでしょうか？
 */
console.log("0 == false", 0 == false);  // true 0を型変換でbooleanにするとfalseなので一致
// →正解
console.log("0 === false", 0 === false); // false 厳格な等価性ではfalse
// →正解
console.log('"false" == false', "false" == false); // false 「false」という文字列なので左辺はtruthy
// →正解
console.log('"0" == 0', "0" == 0); // true 抽象的な場合は文字列が数値に変換されるので文字列0は数値0になり一致
// →正解
console.log('Boolean("0") === false', Boolean("0") === false); // false 文字列の0だからboolean変換時はtruthyになるはず
// →正解
console.log('Boolean(0) === false', Boolean(0) === false); // true 数値の0はbooleanだとfalse。よって一致
// →正解
console.log('!Boolean(0) === false', !Boolean(0) === false); // false boolean(0)の逆はtrueなはず。よって一致しない
// →正解
console.log('-1 == false', -1 == false); // false -1はtruthyだと思う→数値でfalsyな値なのは0のみ
// →正解
console.log('!10 === false', !10 === false); // true 10はtrueその逆はfalse。よってfalseとfalseの厳格な等価性の比較となりtrue
// →正解

/**
 * 問題２：
 * 関数fnの引数numが渡ってこない場合（undefinedまたはnullの場合）のみ、
 * 初期値として-1を設定したいものとします。
 * 
 * 以下の関数fnの初期化を適切に書き直してください。
 * ※aには0以上の整数値が渡ってくるものとします。
 */
let a =0;

function fn(num) {
    // この状態だとaに0が渡されたとき、0はfalsyで-1がtruthyなので-1が代入されてしまう
    // num = num || -1;
    // if (num >=0) {
    //     num = num;
    // } else {
    //     num = -1;
    // } if文での条件分岐という考え方は合っていたが、問題文で「undefinedまたはnullの時に−1を」とあるのでundefinedかnullの時という条件を作るべきだった
    if (num === undefined || num === null) {
        num = -1;
    }
    console.log(num);
}
fn(a);


/**
 * 問題３：
 * 以下のコードを実行した際にコンソールに
 * 期待の出力を行うような関数greetingを
 * 作成してみてください。
 *
 * greeting("Bob", "hi"); -> 出力結果："hi, Bob"
 * greeting("Bob"); -> 出力結果："hello, Bob"
 *
 */
// 正解
 function greeting(name, call) {
     call = call || "hello";
     console.log(call + ', ' + name);
 }


 greeting("Bob", "hi"); //-> 出力結果："hi, Bob"
 greeting("Bob", null); //-> 出力結果："hello, Bob"
