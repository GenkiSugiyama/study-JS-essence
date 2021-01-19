// new Promise(コールバック関数(resolve, reject){}).then().catch().finally()

// Promiseインスタンスの引数にはresolveとrejectを引数にもったコールバック関数を渡す
new Promise(function(resolve, reject){
  console.log('promise');
  // resolve("hello"); // Promiseに渡したコールバック関数内でresolveを実行するとthenメソッド内の処理が呼ばれる
  reject("bye"); // rejectを実行するとcatchメソッド内の処理が呼ばれる
}).then(function(data){ //resolve実行時の引数が渡される
  console.log("then：" + data);
  return data; // 2つめのthenにresoleveの引数を渡したい場合はreturnでその引数を返してあげる
  throw new Error("error"); // thenメソッド内からcatchメソッドに移行したい場合はthrow命令を使う。1つめのthenからcatchへ移行するため2つめのthenは呼ばれない（飛ばされる）
}).then(function(data){ //resolve実行時の引数が渡される
  console.log('then1：' + data);
}).catch(function(data){ //reject実行時の引数が渡される
  console.log("catch:" + data);
}).finally(function(){ // finallyメソッドは必ず呼ばれる（引数を取れない）
  console.log('finally');
})

new Promise(function(resolve, reject){
  console.log('promise');
  setTimeout(function(){
    resolve(0);
  }, 1000);
}).then(function(data){
  console.log(data)
  return data
}).finally(function(){
  console.log('終わり');
})

console.log('global end');