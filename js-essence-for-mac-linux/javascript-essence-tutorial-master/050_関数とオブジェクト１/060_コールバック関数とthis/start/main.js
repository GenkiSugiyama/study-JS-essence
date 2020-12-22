window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello();

// コールバック関数内でのthisの挙動
// あるオブジェクトのメソッドがコールバック関数として他の関数内で実行された場合、他の関数に渡されるのは
// オブジェクトのメソッドそのものではなくオブジェクトが参照している関数そのもののコピーが渡されるので
// コールバック関数として実行される際にはただの関数が実行されることになる
// そのためその中のthisはグローバルオブジェクトを参照することとなる
function fn(ref) {
    ref();
}

fn(person.hello);