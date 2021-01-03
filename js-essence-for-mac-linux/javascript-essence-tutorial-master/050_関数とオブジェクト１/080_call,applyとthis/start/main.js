// bind：thisや引数の参照先を固定した新しい関数を作成。bind使用時点ではその関数は実行されない

// call, apply：thisや引数の参照先を変更する点ではbindと同じ？このメソッドを使用した時点で作成された関数を実行する

function a(name, name1) {
    this.name1 = "a",
    this.name2 = "b",
    this.name3 = "c"
    console.log('hello ' + this.name1);
}

// bindなどの引数となるオブジェクトを変数に格納
const tim = {name: 'Tim'};

const b = a.bind(null, 'Tim');

// b();

function c() {
    console.log('hello ' + this.name);
}

const d = c.bind({name: 'Tom'});

// d();

// apply：第二引数には配列を渡し、関数の仮引数に順番に渡す
// 複数の引数に対して、値を1つずつ渡したい場合に使用する（ES6以降はスプレッド演算子）
a.apply(tim, ['Tim', 'Tom', 'John']);

// call：第一引数にはthis、第二引数以降には仮引数を指定
// c.call(tim);

// applyの実例
const array = [1,2,3,4,5];

