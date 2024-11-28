import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
  return (
    <div className="Dictionary">
      <form>
        <div className="row">
          <span className="col-9">
            <input
              type="search"
              placeholder="Enter a word"
              className="SearchInput"
              autoFocus="on"
            />
            <span className="col-3">
              <input type="submit" value="Search" className="SearchSubmit" />
            </span>
          </span>
        </div>
      </form>
    </div>
  );
}
