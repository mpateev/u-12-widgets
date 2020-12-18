import React, { useState } from "react";

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const renderedItems = items.map((item, index) => {
    // check if the current item is active and set className properly
    const active = index === activeIndex ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => setActiveIndex(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.text}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className="ui raised segment">
      <h2 className="ui right floated header">Accordion</h2>
      <div className="ui clearing divider"></div>

      <div className="ui styled accordion">{renderedItems}</div>
    </div>
  );
}

export default Accordion;
