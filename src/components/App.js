import React from "react";
import Accordion from "./Accordion";
import Translate from "./Translate";
import Search from "./Search";

const items = [
  { title: "Title1", text: "This is a text1" },
  { title: "Title2", text: "This is a text2" },
  { title: "Title3", text: "This is a text3" },
  { title: "Title4", text: "This is a text4" },
];

const App = () => {
  return (
    <div className="ui container">
      <h1>Widgets App</h1>
      <Translate />
    </div>
  );
};

export default App;
