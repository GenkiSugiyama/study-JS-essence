// JavaScriptはメインスレッドで実行される
// 同期処理：メインスレッドでコードが順番に実行される。一つの処理が完了するまで絶対に次の処理には進まない
// 非同期処理：メインスレッドから一時的に処理が切り離される。切り離される分、他の処理が実行できることになる
function sleep(ms) {
  const startTime = new Date();
  while (new Date() - startTime < ms);
  console.log('sleep done');
}

const btn = document.querySelector('button');
btn.addEventListener('click', function(){
  console.log('button clicked');
});

setTimeout(function(){
  sleep(3000);
}, 3000);
