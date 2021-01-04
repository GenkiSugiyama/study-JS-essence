// instanceof：オブジェクトが特定のコンストラクターによって生成されたインスタンスであるかどうかを判定する演算子
// 「インスタンス instanceof コンストラクター」
// インスタンスの作成元のコンストラクターによって条件分岐を作る場合などに用いる

function F(a, b) {
    this.a = a;
    this.b = b;
    // 返り値がオブジェクトの場合、コンストラクターは別のオブジェクトを返すので、インスタンスはコンストラクターから生成されたものではないと判定される
    return 1;
    // return {a: 1}を丁寧に書くと以下のようになる
    // 新たなObjectオブジェクトのインスタンスとして生成し、そのインスタンスのプロパティaに1という値を紐付けたオブジェクトとなる
    // const result = new Object();
    // result.a = 1;
}

F.prototype.c = function() {}

const a = new F(1,2);
// コンストラクター内の返り値が別オブジェクトの場合はfalse→true→true
// returnが未定義 or オブジェクト以外の場合はtrue→true→false
console.log(a instanceof F)
console.log(a instanceof Object);
console.log(a.__proto__ === Object.prototype);