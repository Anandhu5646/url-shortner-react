import React, { useState } from "react";
import "./UrlShortner.css";

const UrlShortner = ({ setInputValue }) => {
  let [value, setValue] = useState("");

  const handleClick=()=>{
    setInputValue(value)
    setValue("")
  }
  return (
    <div>
      <div className="header">
        <h1>
          URL <span>Shortner</span>
        </h1>
      </div>
      <div className="input">
        <input
          type="text"
          className="text"
          placeholder="Paste a link to shorten it"
          value={value}
          onChange={(e)=>setValue(e.target.value)}
        />
        <button className="shorten-button" onClick={handleClick}>Shorten</button>
      </div>
    </div>
  );
};

export default UrlShortner;
