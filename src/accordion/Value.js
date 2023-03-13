import React from "react";


export default function Value({ score, option }) {
  return (
    <div className="input">
      <input type="radio" />{option} <br />
    </div>
  );
}
