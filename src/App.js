import React, { useState } from "react";
import './App.css';
import { type } from "@testing-library/user-event/dist/type";

function App() {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const SampleType = {
    value:value,
    name:name
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://op58ng3qyh.execute-api.ap-northeast-1.amazonaws.com/default/", {
        method: 'POST',  // Using POST to send data to the Lambda function
        headers: {
          'Content-Type': 'application/json',  // Ensure we're sending JSON
        },
        mode: "cors",
        body: JSON.stringify({
          SampleType
        })
      });

      const data = await response.json();  // Parse the JSON response from the Lambda function
      setResponseMessage(data.body);  // Display the response message from the Lambda function
      alert('Data inserted successfully');
    } catch (error) {
      console.error('Error inserting data:', error);
      alert('Error inserting data');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Insert Data into RDS</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>

        {/* Display response message from Lambda */}
        {responseMessage && <p>{responseMessage}</p>}
      </header>
    </div>
  );
}

export default App;
