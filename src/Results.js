import React from "react";
import Meaning from "./Meaning";
import "./Results.css";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <section>
          <h2 className="word">{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetics, index) {
            return (
              <div key={index}>
                <Phonetics phonetics={phonetics} />
              </div>
            );
          })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
