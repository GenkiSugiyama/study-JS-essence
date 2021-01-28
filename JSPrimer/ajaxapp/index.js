console.log("index.js: loaded");

// githubからユーザー情報を取得するための処理
// githubが用意しているAPIにfetchAPIを使ってアクセスする
// const userId = 'GenkiSugiyama';

// HTTP通信を行うためのfetchAPIを使うことで引数に渡すURLに対してリクエストを行う
// fetchはPromiseを返すので通信成功時はthen()で、エラー時はcatchで繋げられる
// このfetchが返すPromiseインスタンスはリクエストに対するレスポンスを表すResponseオブジェクトを戻り値に持つので
// 通信が成功した場合はサーバーから返ってきたresponseをthenメソッドで利用できる

// Asyncfunctionへの書き換え
async function main(){
  try{
    const userId = getUserId();
    const userInfo = await fetchUserInfo(userId);
    const view = createView(userInfo);
    displayView(view)
  } catch(error) {
    console.error(`エラーが発生しました（${error}）`);

  }
}

function fetchUserInfo(userId){
  return fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
  .then((response) => {
    console.log(response);
    if(!response.ok){
      // response.okプロパティがtrueの場合はerrorをそのまま返せないのでthenメソッド内でべっとエラーのPromiseオブジェクトを返す
      console.error("エラーレスポンス", response);
      return Promise.reject(new Error(`${response.status}：${response.statusText}`));
    } else {
      return response.json()
    }
  });
}

// inputタグからユーザーIDを取得する処理
function getUserId() {
  return document.getElementById('userId').value;
}

function createView(userInfo){
  return escapeHTML`
  <h4>${userInfo.name} (@${userInfo.login})</h4>
  <img scr="${userInfo.avatar_url}" alt="${userInfo.login}" height="100">
  <dl>
    <dt>Location</dt>
    <dd>${userInfo.location}</dd>
    <dt>Repositories</dt>
    <dd>${userInfo.public_repos}</dd>
  </dl>
  `;
}

function displayView(view){
  const result = document.getElementById('result');
  result.innerHTML = view;
}

// 文字列のエスケープ
function escapeSpecialChars(str) {
  return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
}

function escapeHTML(strings, ...values) {
  return strings.reduce((result, str, i) => {
      const value = values[i - 1];
      if (typeof value === "string") {
          return result + escapeSpecialChars(value) + str;
      } else {
          return result + String(value) + str;
      }
  });
}