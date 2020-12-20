// 関数とは「実行可能な」オブジェクトである→「実行可能な」が他のオブジェクトと異なる点
function a() {
  console.log('hello');
}

// 他のオブジェクトと同様にプロパティを追加できる
a.prop = 0;
a.method = function() {
  console.log('method');
}

a();
a.method();
console.log(a.prop);