// イテレーター：反復操作を行う際に使用するオブジェクト
// イテレーターの記述ルール
// function genIterator(){
//   // 以下のgetIterator関数から返却されるオブジェクト部分がイテレーター
//   return {
//     // イテレーターはnextメソッドを必ず持っている
//     next: function() {
//       return {
//         done: true / false, // ループを継続するかどうか
//         value: "値" // 返却する値
//       }
//     }
//   }
// }

function genIterator(max = 10) {
  let i = 0;
  return {
    next: function() {
      if(i >= max) {
        return {
          done: true
        }
      } else {
        return {
          done: false,
          value: i++
        }
      }
    }
  }
}

// const it = genIterator(10);
// let a = it.next();
// while(!a.done) {
//   console.log(a.value);
//   a = it.next();
// }

const obj = {
  [Symbol.iterator]: genIterator.bind(null, 10)
}

for(let i of obj) {
  console.log(i);
}
