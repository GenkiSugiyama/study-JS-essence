// オブジェクトのプロパティにはvalue以外の設定値が与えられている。value含めてそれがディスクリプター
// configurable、enumerable、writable
// const obj = {prop: 0};
const obj = {};
Object.defineProperty(obj, "prop", {
  value: 0
})

// definePropertyでディスクリプターを設定した際の初期値はfalseとなる

obj.prop = 1;


const descriptor = Object.getOwnPropertyDescriptor(obj, "prop");
console.log(descriptor);