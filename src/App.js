import React from "react";
function App(){
const FetchData = () => {

  fetch("https://1ws95y0j1h.execute-api.ap-northeast-1.amazonaws.com/dev")
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch(() => alert("error"));

  return <></>;
};

}

export default App;