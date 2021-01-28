console.log("index.js: loaded");

// githubからユーザー情報を取得するための処理
// githubが用意しているAPIにfetchAPIを使ってアクセスする
const userId = 'GenkiSugiyama';

// HTTP通信を行うためのfetchAPIを使うことで引数に渡すURLに対してリクエストを行う
// fetchはPromiseを返すので通信成功時はthen()で、エラー時はcatchで繋げられる
// このfetchが返すPromiseインスタンスはリクエストに対するレスポンスを表すResponseオブジェクトを戻り値に持つので
// 通信が成功した場合はサーバーから返ってきたresponseをthenメソッドで利用できる

function main(){
  fetchUserInfo(userId);
}

function fetchUserInfo(userId){
  fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
  .then((response) => {
    console.log(response.status);
    if(!response.ok){
      console.error("エラーレスポンス", response);
    } else {
      return response.json().then((userInfo) => {
        console.log(userInfo);
        // APIで取得した要素をHTMLに表示させる
        // HTMLの組み立てを関数化
        const view = createView(userInfo);
        // HTMLの描画も関数化
        displayView(view);
      });
    }
  }).catch((error) => {
    console.log(error);
  });
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