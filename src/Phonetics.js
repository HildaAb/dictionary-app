import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <span className="audio">
        <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
          Audio
        </a>
      </span>
      <span className="text">{props.phonetics.text}</span>
    </div>
  );
}
