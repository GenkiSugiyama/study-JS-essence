setTimeout(function task1() {
  console.log('task1');
});

// promise内のコールバック関数は同期的に処理される
// then内のコールバック関数は非同期処理
new Promise(function promise(resolve) {
  console.log('promise');
  resolve();
}).then(function job1() {
  console.log('job1');
});

console.log('global end');

// MacroTask（タスクキュー）とMicroTask（ジョブキュー）が存在する場合、MicroTaskが優先的に処理される
// MacroTaskはループ毎に1つずつしかタスクを実行しないが、MicroTaskはループ毎に積まれている全てのタスクを実行する

// MacroTaskの主な物：setTimeout / setInterval / requestAnimationFrame
// MicroTaskの主な物：Promises