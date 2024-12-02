import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.slice(0, 3).map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">{definition.definition}</div>
            {definition.example && (
              <div className="example">Example: {definition.example}</div>
            )}
            <Synonyms synonyms={definition.synonyms} />{" "}
          </div>
        );
      })}
    </div>
  );
}
