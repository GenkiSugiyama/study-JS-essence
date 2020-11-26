let a = 0;
function b() {
    // 関数コンテキスト：関数実行中に呼び出されるコンテキスト
    console.log(this, arguments, a);
}

// console.log(a);
b();
// argumentsは関数コンテキストで用意されるのでグローバルな場所では使用できない（エラーになる）
console.log(arguments)