window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello();

// bind関数の第一引数のオブジェクトをhelloメソッド内のthisの参照先とする
// その関数を新しい関数に格納している
const helloTom = person.hello.bind(person);

function fn(ref) {
    ref();
}


// bind:thisや引数を固定した新しい関数を作成する
fn(helloTom);

function a() {
    console.log("Hello " + this.name);
}

// aのthisの参照先をを{name: 'Tim'}オブジェクトに束縛した関数を関数bに渡している
const b = a.bind({name: 'Tim'});
// 関数bが実行された時のthis.nameはTimとなる
b();


function c(name) {
    console.log("Hello " + name);
}
// thisが使われていない関数に対してbindの第一引数を使用しても意味なし
const d = c.bind({name: 'Tim'}); //この場合はundefined
// 第二引数を指定することで新しい変数に格納する関数の引数を固定することもできる
const e = c.bind(null, "genki"); //この場合はHello genkiとなる
// 関数bが実行された時のthis.nameはTimとなる
d();
e();　// bindで引数を固定した関数実行時に別の引数を渡してもbind時の引数が優先される

