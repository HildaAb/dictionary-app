import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";
import books from "./books.jpg";

export default function App() {
  return (
    <div>
      <div className="App">
        <img src={books} alt="books" className="fluid-left" width="250" />
        <p>Dictionary</p>
        <Dictionary />
      </div>
    </div>
  );
}
