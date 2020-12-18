import Axios from "axios";
import React, { useEffect, useState } from "react";
import Accordion from "./Accordion";

const urlWiki = "https://en.wikipedia.org/w/api.php"; // * action=query&list=search&format=json&origin=*&srsearch=programming'

const Search = () => {
  const [term, setTerm] = useState("");
  const [debTerm, setDebTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    // * get use of debounced term search, avoiding React warning of useEffect dependency.
    // * set timeout period of 1 sec before changing the 'debTerm'. If the user goes on with the input,
    // * calcel the timer using cleanup function and wait another 1 sec, then set 'debTerm' to 'term' value
    const timerId = setTimeout(() => setDebTerm(term), 1000);

    // * return useEffect cleanup function for the input timer
    return () => clearTimeout(timerId);
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await Axios.get(urlWiki, {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: debTerm,
        },
      });

      setResults(data.query.search);
    };

    debTerm && search(); // search() only if the 'debTerm' not empty
  }, [debTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="srch">Enter Search Term</label>
          <input
            className="input"
            type="text"
            value={term}
            name="srch"
            id="srch"
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
