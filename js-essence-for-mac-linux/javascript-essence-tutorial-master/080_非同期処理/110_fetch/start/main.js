// fetch：
// 同じ改装のusers.jsonのデータを取得
// fetch関数はPromiseオブジェクトを返す→thenやcatchを繋げられる
// console.log(window.fetch("users.json")) →Promise

// fetch("users.json").then(function(response){
//   console.log(response); // fetchで取得したデータを表示
//   return response.json();　// responseオブジェクトからjsonオブジェクトを取り出すためにjson関数を実行
// }).then(function(json){
//   console.log(json);
// })

// ×
// async function fetchUsers(){
//   const response = await fetch('users.json');
//   return response.json();
// }

// fetchUsers().then(function(json){
//   for(const user of json){
//     console.log(`I'm ${user.name}, ${user.age} years old`);
//   }
// })

async function fetchUsers(){
  const response = await fetch('users.json');
  const json = await response.json();
  for(const user of json){
    console.log(`I'm ${user.name}, ${user.age} years old`);
  }
}
fetchUsers();