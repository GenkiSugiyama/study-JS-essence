// アロー関数：「無名関数」を記述しやすくした記法
// しかしアロー関数内では　無名関数が保持するthis、argmentsを保持しない
function a(name) {
  return 'hello ' + name;
}

// 関数式をアロー関数に
const b = (name) => {
  return 'hello ' + name;
}
console.log(b("Tom"));