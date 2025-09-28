import React, { useState, useCallback, useEffect } from "react";
import "./App.css"; // import styles

const App = () => {
  const [randomString, setRandomString] = useState("");

  const generateRandomString = useCallback(() => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 10; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setRandomString(result);
  }, []);

  useEffect(() => {
    generateRandomString();
  }, [generateRandomString]);

  return (
    <div className="app">
      <div className="card">
        <h1 className="title">🎲 Random String Generator</h1>

        <div className="string-box">{randomString}</div>

        <button onClick={generateRandomString} className="btn">
          🔄 Generate New String
        </button>
      </div>
    </div>
  );
};

export default App;
