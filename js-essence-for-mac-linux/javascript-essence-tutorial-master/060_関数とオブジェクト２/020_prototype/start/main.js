// プロトタイプ：オブジェクトに存在する特別なプロパティ、コンストラクター関数と合わせて使用する
function Person(name, age) {
    this.name = name;
    this.age = age;
    // プロパティとしてthis.関数名と追加した場合の挙動とprototypeとして追加した挙動自体は同じ
    // プロパティとして追加した場合は、インスタンスで実行する際に関数のコピーが渡されるのでメモリの消費が大きい。
    // 各オブジェクトごとに参照先の関数が生成される
    // this.hello = function() {
    //     console.log('hello ' + this.name)
    // }
}

// 「コンストラクタ関数名.prototype.追加したいプロパティ名」でコンストラクタ関数内のprototypeオブジェクトにメソッドを追加する
// インスタンス化されたオブジェクトで使用する場合は「インスタンス名.追加した関数()」で実行
// prototypeオブジェクトに追加したメソッドをインスタンスで使用する場合、prototypeで追加した参照先が__proto__にコピーされる
// →prototypeの参照先とインスタンスが実行する際の参照先は一致する
Person.prototype.hello = function() {
    console.log('hello ' + this.name)
}

const bob = new Person('Bob', 18);
const tom = new Person('Tom', 33);
const sun = new Person('Sun', 20);


bob.hello();
tom.hello();