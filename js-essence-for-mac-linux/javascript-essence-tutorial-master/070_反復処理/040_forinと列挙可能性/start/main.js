// Objectの設定値であるディスクリプターのenumerable(列挙可能性)がtrueならばfor...inで列挙することが可能
// prototypeも列挙されるためオブジェクト自身のプロパティのみ列挙したい場合はprototypeのenumerableはfalseとしておく
// prototypeを列挙対象外にしたい場合はfor..inの中でhasOwnPropertyを使用する
// ビルドインオブジェクト（JSが準備してるオブジェクト）は基本的にenumerableはfalseとなっている

// Symbleは列挙可能性なし
const s = Symble();

const obj = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3',
	// 変数をプロパティ名として扱いたい場合は「[変数めい]」とカッコでくくる
	[s]: 'value4'
}

Object.prototype.method = function() {}

// forinでは対象オブジェクトのディスクリプターのenumerableの設定値をみている
// forinの()内で定義される変数には対象オブジェクトのプロパティ名が格納される
for(let key in obj) {
	// obj.hasOwnProperty(key) でkeyに格納されるprototypeを含むプロパティが自分自身のプロパティかを判別する
	// 自分自身のプロパティならtrue、prototypeなどならfalseを返す
	if(obj.hasOwnProperty(key)){
	// keyという変数をobj内のプロパティ名の置き換えとして扱う
		console.log(key, obj[key]);
	}
}