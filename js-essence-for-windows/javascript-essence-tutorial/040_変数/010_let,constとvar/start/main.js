// let,constはES6から使えるようになった
// 再宣言：letもconsotもダメ、varはOK
// let a = 0;
// let a = 1; // これはエラー

// var b = 0;
// var b = 1; // これはOK

// 再代入：letのみOK、constは一度宣言した変数は変更できない
// let c = 0;
// c = 1; // これはOK

// const d = 0;
// d = 1; // これはだめ

// スコープ：let,constはブロックスコープが生成される、varは関数スコープのみ
// {
//   const e = 0; // グローバルから参照不可
//   var f = 0; // グローバルから参照可能
// }

// 初期化、ホイスティング：let,constの宣言前に値を参照しようとすると初期化は行われないのでエラー
// 　　　　　　　　　　　　varは初期化されundefinedは代入される
// console.log(h);
// let g = 0;
// var h = 0;

// varは使用非推奨、letやconstと混在したコードを書くとバグの原因となるため使わない
