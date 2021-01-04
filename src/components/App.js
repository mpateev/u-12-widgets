import React, { useState } from "react";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Search from "./Search";

const items = [
  { title: "Title1", text: "This is a text1" },
  { title: "Title2", text: "This is a text2" },
  { title: "Title3", text: "This is a text3" },
  { title: "Title4", text: "This is a text4" },
];

const options = [
  { label: "Color Red", option: "red" },
  { label: "Color Green", option: "green" },
  { label: "Shade of Blue", option: "blue" },
];
const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className='ui container'>
      <h1>Widgets App</h1>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      ) : null}
      <Accordion items={items} />
      <Search />
    </div>
  );
};

export default App;
