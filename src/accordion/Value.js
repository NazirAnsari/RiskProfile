import React from "react";

export default function Value({ score, option, select,set}) {
  
  return (
    <div className="input">
      <label htmlFor="opt">
        <input
          type="radio"
          id="opt"
          value={option}
          name={select}
          
          onClick={(e)=>set(select,e.target.value)}
          
          required='required'
        />
        {option} <br />
      </label>
    </div>
  );
}
