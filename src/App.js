import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();

  fetch("https://op58ng3qyh.execute-api.ap-northeast-1.amazonaws.com/default/")
    .then((res) => res.json()) // JSON形式に変換
    .then((json) => setData(json))
    .catch(() => alert("error")); // エラー発生時にアラート

  console.log(data);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div>{data}</div>

      </header>
    </div>
  );
}

export default App;