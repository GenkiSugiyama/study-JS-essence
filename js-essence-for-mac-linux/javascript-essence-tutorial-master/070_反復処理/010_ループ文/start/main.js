// for(indexの初期化; ループを繰り返す条件; 1ループ終わるごとのiへの処理)
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// whileはindexを外で定義しておく
// while(ループを繰り返す条件) {
//   ループ中の処理
//   ・
//   ・
//   ・
//   条件に関わるオブジェクトやら何らかへの処理
// }
let i = 0;
while(i < 10) {
  console.log(i);
  i++;
}