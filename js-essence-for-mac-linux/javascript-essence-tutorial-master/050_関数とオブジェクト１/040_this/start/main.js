// this：呼び出し元のオブジェクトへの参照を保持するキーワード
const person = {
    name: 'Tom',
    hello: function() {
        // 呼び出し元のオブジェクト（person）を参照したいのでthisを使う
        console.log("Hello " + this.name);
    }
}

person.hello();