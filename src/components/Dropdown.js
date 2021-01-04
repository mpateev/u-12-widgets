import React, { useState, useRef, useEffect } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    // bound click event listener to the document body to close dropdown
    // when clicked outside of dropdown menu
    const onBodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick);
    // cleanup for body event listener
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((opt) => {
    if (opt.option !== selected.option) {
      return (
        <div
          key={opt.option}
          className='item'
          onClick={() => onSelectedChange(opt)}>
          {opt.label}
        </div>
      );
    }

    return null;
  });

  return (
    <div className='ui raised segment'>
      <h2 className='ui right floated header'>Dropdown</h2>
      <div className='ui clearing divider'></div>
      <div ref={ref} className='ui form'>
        <div className='field'>
          <label className='label'>Select a Color</label>
          <div
            className={`ui selection dropdown ${open ? "visible active" : ""}`}
            onClick={() => setOpen(!open)}>
            <i className='dropdown icon'></i>
            <div className='text'>{selected.label}</div>
            <div className={`menu ${open ? "visible transition" : ""}`}>
              {renderedOptions}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
