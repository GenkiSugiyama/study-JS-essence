// 読み込み元では外部のファイルで使用したい変数や関数の前にexportをつけて外部に露出する

export let publicVal = 0;

export function publicFn() {
  console.log('publicFn callesd');
}