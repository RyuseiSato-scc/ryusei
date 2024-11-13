import React, { useEffect } from "react";

function App() {
  // FetchData関数を定義
  const FetchData = () => {
    fetch("https://1ws95y0j1h.execute-api.ap-northeast-1.amazonaws.com/dev")
      .then((res) => res.json()) // JSON形式に変換
      .then((json) => console.log(json)) // 取得したデータをコンソールに出力
      .catch(() => alert("error")); // エラー発生時にアラート
  };

  // コンポーネントがマウントされた時にFetchDataを呼び出す
  useEffect(() => {
    FetchData();
  }, []); // 空の依存配列で一度だけ実行される

  return (
    <div>
      <h1>APIデータの取得</h1>
    </div>
  );
}

export default App;
