import React from "react";

const callLambdaFunction = async () => {
  try {
    const response = await fetch('https://1ws95y0j1h.execute-api.ap-northeast-1.amazonaws.com/dev', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result); // データを表示
  } catch (error) {
    console.error('Error fetching data:', error);
    alert(`Error: ${error.message}`);
  }
};