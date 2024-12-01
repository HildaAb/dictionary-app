import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";
import books from "./books.jpg";

export default function App() {
  return (
    <div>
      <div className="App">
        <img src={books} alt="books" className="fluid-left" width="300" />
        <h5>English</h5>
        <h1>Dictionary</h1>
        <Dictionary />
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/HildaAb" target="_blank" rel="noreferrer">
            Ilona Aase
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/HildaAb/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            on GitHub{" "}
          </a>{" "}
          and{" "}
          <a
            href=" https://dictionary-for-me.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            hosted on Netlify{" "}
          </a>
          <br />
        </footer>
      </div>
    </div>
  );
}
