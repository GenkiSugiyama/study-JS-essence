function sleep(val) {
  // returnにPromiseのインスタンスが渡されている
  // Promiseインスタンス内のコールバック関数ではsetTImeoutが呼ばれているのでこのコールバック関数の処理が非同期処理として
  return new Promise(function(resolve, reject){
    console.log('テスト')
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, 1000);
  })
}

sleep(0).then((val) => {
  // Promiseを使って非同期処理をチェーンする場合はthenメソッド内のコールバック関数のreturnにPromiseのインスタンスを渡す
  return sleep(val);
}).then(function(val){
  return sleep(val);
}).then(function(val){
  return sleep(val);
}).then(function(val){
  return sleep(val);
}).then(function(val){
  return sleep(val);
})

