

// async function fetchUsers() {
//   const response = await fetch('users.json');
//   const json = await response.json();
//   for(const user of json) {
//     console.log(`I'm ${user.name}, ${user.age} years old`)
//   }
// }

// fetchUsers();

async function fetchUsers() {
  const response = await fetch('users.json');
  // console.log(response);
  if(response.ok) {
    const json = await response.json();
    // console.log(json.length);
    if(!json.length) {
      throw new Error("no data found");
    }
    return json;
  }
  
}

async function init() {
  try{
    const users = await fetchUsers();
    for(const user of users) {
      console.log(`I'm ${user.name}, ${user.age} years old`)
    }
  } catch(e) {
    console.log(e);
  } finally {
    console.log('bye')
  }
  
}
init();

