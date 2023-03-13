import React, { useState } from "react";
import { RiskData } from "./api";
import MyAccodian from "./MyAccodian";
import { Link } from "react-router-dom";
import Popup from "./Popup";
import "./accodion.css";
export default function Accodion() {
  /* eslint-disable */
  const [data, setData] = useState(RiskData);
  const [value, setvalue] = useState(false);
  return (
    <>
      <section className={`sec ${value && 'cont'}`}>
        <h4>Please complete the risk profile given below</h4>
        <MyAccodian data={data} />
        <button onClick={() => setvalue(true)} className="proceedbtn">
          Proceed
        </button>
      </section>
      {value && (
        <div className="popup">
          <div>
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" id="name" className="inputPopup"/>
          </div>

          <div>
            <label htmlFor="email">Email</label> <br />
            <input type="email" id="email" className="inputPopup"/>
          </div>

          <div>
            <label htmlFor="Mobile">Mobile</label>
            <br />
            <input type="tel" id="Mobile" className="inputPopup" />
          </div>
          <Link to="/ThankYouPage">
            <button type="submit">Submit</button> <br />
          </Link>
        </div>
      )}
    </>
  );
}
