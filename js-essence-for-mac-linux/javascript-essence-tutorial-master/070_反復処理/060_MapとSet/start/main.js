// Map,Set：データを管理するための入れ物(コレクション)
// オブジェクトとの違いとは？
// キーとして使用できるものが制約なし（オブジェクトは文字列のみ）
// for...inのループは不可
// for...ofでループ可能

// ArrayとSetの違い
// 重複値を持てるかどうか：Array→持てる、Set→持てない
// for...in：Array→使える、Set→使えない
// for...of：どちらも使える

// MapとSetの違い
// Map：キーと値を持ったデータの塊（オブジェクトに似てる）
// Set：値が重複しない、インデックスがない配列のようなもの

const map = new Map();
const key1 = {}; // mapのkeyにオブジェクトを指定している

// mapのキーと値のセット
map.set(key1, "value1");

// getメソッド内で指定したキーに対応する値を取得
console.log(map.get(key1));

const key2 = function() {};
map.set(key2, "value2");
console.log(map.get(key2));

let key3 = 0;
map.set(key3 = 0, "value3");
console.log(map.get(key3));

// キーを軸に値の削除
map.delete(key1);

for(let [k, v] of map) {
  console.log(k, v);
}

const s = new Set();

// 重複した値は保持できないので下のループ文で1つしか値が出力されない
s.add(key3);
s.add(key3);

console.log(s.has(key3));
for(let k of s) {
  console.log(k);
}
