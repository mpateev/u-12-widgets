import React, { useState } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const renderedOptions = options.map((opt) => {
    if (opt.option !== selected.option) {
      console.log("if false:", opt, selected);
      return (
        <div
          key={opt.option}
          className="item"
          onClick={() => onSelectedChange(opt)}
        >
          {opt.label}
        </div>
      );
    }
    console.log("if true:", opt, selected);
    return null;
  });
  console.log(renderedOptions);
  return (
    <div className="ui raised segment">
      <h2 className="ui right floated header">Dropdown</h2>
      <div className="ui clearing divider"></div>
      <div className="ui form">
        <div className="field">
          <label className="label">Select a Color</label>
          <div
            className={`ui selection dropdown ${open ? "visible active" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <i
              className={`dropdown icon ${open ? "visible transition" : ""}`}
            ></i>
            <div className="text">{selected.label}</div>
            <div className="menu">{renderedOptions}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
