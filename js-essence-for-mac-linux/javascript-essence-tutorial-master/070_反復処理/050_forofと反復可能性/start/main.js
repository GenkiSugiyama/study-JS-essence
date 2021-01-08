// イテレーター（反復可能オブジェクト）：反復操作を行う際に使用するオブジェクト（String,Array,Map,Set）
const arry = ['a', 'b', 'c'];

// 1個飛ばして配列の要素を追加すると飛ばされた要素はundefinedとなる
arry[4] = 'e';

// forogはオブジェクトのprototype内のSymble.itelatorプロパティをみている
// forofの()内で宣言される変数は対象オブジェクトの値が入る
for(let v of arry) {
  console.log(v);
}