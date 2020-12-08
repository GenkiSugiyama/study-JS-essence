// ホイスティングはコンテキストが生成されたタイミングで発生し宣言部がメモリスペースに格納される

// 関数宣言の前に関数を呼び出しても実行される
// →これは「ホイスティング」でコードの実行前に定義がメモリに配置されているため
a();

function a() {
  console.log("a is called");
}

// varで変数宣言を行った場合は、ホイスティングで変数のメモリスペースのみが確保（var b のみ）が行われ
// 値は未定義として扱われる（そのためundifinedとなる）

// 下の例のような場合は
// console.log(b);
// var b = 0;
// ↓
// このように扱われる
// var b; ←varがあったら変数分のメモリスペースを確保しundifinedで初期化を行う
// console.log(b); ←呼び出したタイミングでは実際の値は代入されておらず「undifined」が格納されている
// b = 0;

// let constの場合、呼び出しより後に宣言があるとエラーとなる
console.log(b);
let b = 0;

// let、constの場合だとホイスティングで変数のメモリスペースは確保されるが
// undifinedの初期化が行われない

