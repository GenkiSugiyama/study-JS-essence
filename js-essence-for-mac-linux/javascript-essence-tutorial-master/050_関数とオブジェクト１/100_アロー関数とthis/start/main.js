window.name = 'John';

// const a = () => {
//     console.log('Bye ' + this.name);
// };

// var person = {
//     name: 'Tom',
//     // 通常の無名関数だとhelloメソッド内のthisは呼び出し元のオブジェクトを参照するが
//     // アロー関数に変更するとグローバルオブジェクトへの参照となる
//     // アロー関数でのthisは
//     hello: function() {
//         console.log('Hello ' + this.name);
//         // aの宣言時のレキシカルスコープはグローバルスコープのwindowとなる
//         // そのためa内のthisw.nameはwindow.nameと同じになる
//         a();
//     }
// }
// person.hello();

var person = {
    name: 'Tom',
    // 通常の無名関数だとhelloメソッド内のthisは呼び出し元のオブジェクトを参照するが
    // アロー関数に変更するとグローバルオブジェクトへの参照となる
    // アロー関数でのthisは
    hello: function() {
        console.log('Hello ' + this.name);
        // この場合aの宣言はhelloメソッド内で行われている
        // この時のレキシカルスコープはpersonとなるためa内のthis.nameはperson.nameとなる
        const a = () => {
            console.log('Bye ' + this.name);
        };
        // aの宣言時のレキシカルスコープはグローバルスコープのwindowとなる
        // そのためa内のthis.nameはwindow.nameと同じになる
        a();
    }
}
person.hello();

