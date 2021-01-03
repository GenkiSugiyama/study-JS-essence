function F(a, b) {
  this.a = a;
  this.b = b;
  this.hello = function() {
    console.log('hello');
  }
  // コンストラクター関数のreturn値がオブジェクトの場合はreturnの値を持つインスタンスが生成される
  return {}; // →この場合はinstanceを確認すると空のオブジェクトが格納されている
  // returnの値がオブジェクト以外or未定義の場合はコンストラクター関数内のprototypeを__proto__にコピーする&コンストラクター関数内で定義したプロパティ、メソッドを持つインスタンスが生成される
  // return 1; // →thisに格納されたプロパティを持ったオブジェクトが生成される
}

F.prototype.c = function(){};

const instance = new F(1,2);
// console.log(instance);

function newOpe(C, ...args) {

  // Object.create：第一引数に指定したオブジェクトを__proto__にコピーした空のオブジェクトを生成する
  const _this = Object.create(C.prototype);
  // console.log(_this);

  const result = C.apply(_this, args)
  console.log(result, _this);

  // コンストラクター関数の戻り値がObjectの場合、そのまま戻り値を返す
  if(typeof result === "object" && result !== null) {
    return result;
  }

  // コンストラクター関数の戻り値がObjectもしくは未定義の場合、thisで定めたプロパティ、メソッドを持つ＆prototypeを__proto__にコピーされたオブジェクトを返す
  return _this;
}
const instance1 = newOpe(F, 1, 2);
console.log(instance1);