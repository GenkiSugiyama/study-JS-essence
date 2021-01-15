// 同期処理はコールスタック（後入れ先出し）、非同期処理はタスクキュー（先入先出）に積まれていく
// タスクキューに積まれた非同期処理は、コールスタックが空になると順番にタスクキューから出てコールスタックに積まれていく

const btn = document.querySelector('button');
// グローバルコンテキスト生成後にクリックイベントが登録される
// クリックイベントは非同期処理なのでクリックが発火するとタスクキューに積まれていく
// 関数aのsetTimeout待機中であればタスクキューの先頭に積まれsetTimeoutの4秒経過後はsetTimeoutの後に積まれる
btn.addEventListener('click', function task2() {
    console.log('task2 done');
});

// グローバルコンテキスト生成後、a関数の関数コンテキストがコールスタックに積まれる
function a() {
    // 関数内のsetTimeoutは関数コンテキスト生成後に非同期処理として登録される
    // 第二引数に4秒間渡されているので4秒間待機後にタスクキューに登録される
    setTimeout(function task1() {
        console.log('task1 done');
    }, 4000);

    // 関数コンテキスト生成時に待機が始まるのでこの待機が完了→グローバルコンテキストの終了後
    // タスクキューに並んでいる順にコールスタックへ呼び出されて実行される
    const startTime = new Date();
    while (new Date() - startTime < 1000);

    console.log('fn a done');
}
a();
