const person = {
    name: 'Tom',
    bye: () => {
        console.log('Bye ' + this.name);
    },
    hello: function (greeting) {
        console.log(greeting + ' ' + this.name);
        return greeting + ' ' + this.name;
    },
    // hello1s: setTimeout(this.hello.bind(person, "hello"), 1000),
    // 1.bindを使った実装：↓不正解
    // hello1s: function() {
    //     const a = function() {
    //         setTimeout(this.hello.bind(this, 'hello'), 1000);
    //     }
    //     return a();
    // }
    // ↓正解
    // hello1s: function() {
    //     setTimeout(this.hello.bind(this, 'hello'), 1000);
    // }
    // 2. アロー関数を使った実装：不正解（未回答）
    //    hello1s: function() {
    //        setTimeout(() => {
    //            this.hello('hello');
    //        }, 1000)
    //    }
    // 3. thisをいったん変数に代入
       hello1s: function() {
           const _this = this;
           setTimeout(function() {
               _this.hello('hello');
           }, 1000)
       }

    /**
     * 問題４：
     * 1秒後に"hello Tom"
     * と出力されるような、メソッドを
     * personオブジェクトに追加してみてください。
     * 
     * 以下のように使用するものとします。
     * person.hello1s()
     * -> 1秒後に"hello Tom"と出力
     * 
     * 3通りの方法で実装してみてください。
     * １．bind
     * ２．アロー関数
     * ３．thisを一旦変数に代入
     */


    
}
person.hello1s();
/**
 * 問題１：
 * 1秒後に"hello Tom"
 * と出力されるように、以下のコード
 * の記載を変更しましょう。
 */
// setTimeout関数の第一引数はコールバック関数
// setTimeout(person.hello.bind(person, 'hello'), 1000);
// →正解


/**
 * 問題２：
 * alertで"hello Tom"
 * と出力されるように、
 * 以下のコードを変更してください。
 */
// alert関数の第一引数は文字列
// alert(person.hello('hello'));
// →正解

/**
 * 問題３：
 * person.byeメソッドを１秒後に実行したかったので
 * bindを使って束縛してみましたが、コンソールには
 * "Bye"しか表示されませんでした。
 * "Bye Tom"とするためにはどうすればよいでしょうか？
 */
// window.name = "Tom";
// setTimeout(person.bye, 1000);