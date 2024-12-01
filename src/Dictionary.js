import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePictureResponse(response) {
    setPhotos(response.data.photos);
    console.log(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pictureApiKey = "0ac953t0o20a266a6d9990b5f3f49241";
    let pictureApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${pictureApiKey}`;
    axios.get(pictureApiUrl).then(handlePictureResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Enter a word"
            className="SearchInput"
            autoFocus="on"
            onChange={handleKeywordChange}
          />
          <input type="submit" value="Search" className="Submit" />
        </form>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
