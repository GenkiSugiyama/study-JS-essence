function F(a, b) {
  this.a = a;
  this.b = b;
  // コンストラクター関数のreturn値がオブジェクトの場合は
  // インスタンス化されたオブジェクトににはreturnの値を返す
  // return {}; →この場合はinstanceを確認すると空のオブジェクトが格納されている
  // returnの値がオブジェクト以外or未定義の場合はコンストラクター関数内のprototypeを__proto__にコピーする&インスタンスオブジェクトをthisの参照先としてコンストラクター関数を実行する
  // return 1; →thisに格納されたプロパティを持ったオブジェクトが生成される
}

F.prototype.c = function(){};

// const instance = new F(1, 2);
console.log(instance);


function newOpe()
const instance1 = newOpe(F, 1, 2);