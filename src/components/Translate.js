import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";
const googleAPIKey = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindu",
    value: "hi",
  },
];
const Translate = () => {
  const [lang, setLang] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div className='ui raised segment'>
      <h2 className={`ui right floated header`}>Text Translate</h2>
      <div className='ui clearing divider'></div>
      <div className='ui form'>
        <div className='field m-2'>
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label='Select Language'
        selected={lang}
        onSelectedChange={setLang}
        options={options}
      />
      <hr />
      <h3>Output</h3>
      <Convert text={text} language={lang} />
    </div>
  );
};

export default Translate;
