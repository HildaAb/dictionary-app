import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
  return (
    <div className="Dictionary">
      <form>
        <input
          type="search"
          placeholder="Enter a word"
          className="SearchInput"
          autoFocus="on"
        />
        <input type="submit" value="Search" className="Submit" />
      </form>
    </div>
  );
}
