const arry = [1, 2, 3, 4, 5];

// for(i = 0; i < arry.length; i++) {
//   console.log(arry[i]);
// }

// let i = 0;
// while(i < arry.length) {
//   console.log(arry[i]);
//   i++;
// }
let v, i = 0;
while(v = arry[i++]) {
  console.log(v);
}