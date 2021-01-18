function sleep(callback, val) {
  setTimeout(function(){
    console.log(val++);
    callback(val);
  }, 1000);
}

// setTImeoutで非同期処理をチェーンさせていくとネストが深くなり可読性が落ちる（コールバック地獄）
sleep(function(val){
  sleep(function(val){
    sleep(function(val){
      sleep(function(val){}, val)
    }, val);
  }, val);
}, 0)