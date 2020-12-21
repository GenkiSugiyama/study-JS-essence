// window.name = 'john';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
        a();
    }
}

// person.helloをコピー先を実行してもpersonオブジェクトないのnameプロパティは反映されない
// const ref = person.hello;
// ref();

// オブジェクトのメソッドとして実行される場合のthis（personオブジェクトのhelloメソッド内のthis）：呼び出し元のオブジェクトへの参照
// 単純に関数として実行される場合のthis（コピー先のthis）：グローバルオブジェクトへの参照

// オブジェクトのメソッド内のthisは呼び出し元オブジェクトを参照するthis.name == person.name = "Tom"
person.hello();

// 単純な関数内のthisはグローバルオブジェクトを参照するthis.name == window.name = "john"
function a(){
    console.log('Hello ' + this.name);
}