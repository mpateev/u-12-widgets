import React, { useState } from "react";
import Header from "./Header";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Search from "./Search";
import Route from "./Route";
import Link from "./Link";

const items = [
  { title: "Title1", text: "This is a text1" },
  { title: "Title2", text: "This is a text2" },
  { title: "Title3", text: "This is a text3" },
  { title: "Title4", text: "This is a text4" },
];

const options = [
  {
    label: "Study in Scarlet",
    value: "red",
  },
  {
    label: "Shades of Blue",
    value: "blue",
  },
  {
    label: "Esmerald green shadow",
    value: "green",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="ui container">
      <h1>Widgets App</h1>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
        <h1 style={{ color: selected.value }}>
          This text is rendered in {selected.value} color
        </h1>
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
