import React from "react";
import { riskJsonData } from "./Json";
import { useState } from "react";

export default function Accordian() {
  const [data, setData] = useState(riskJsonData);
  const [accordian, setActiveaccordian] = useState(-1);

  function toggleAccordian(index) {
    setActiveaccordian(index);
  }
  return (
    <>
      <div className="conatiner">
        <div>
        <h1 className="accordian__title">Please complete the risk profile questionaire given below.</h1>
        <h1>Let answer of some question</h1>
        </div>
        <div className="accordain__faq">
          {data.map((item, index) => {
            return (
              <div key={index} onClick={toggleAccordian(index)}>
                <div className="accordian__faq_heading">
                  <h3 className={accordian === index ? "acitve" : " "}>
                    {item.question}
                  </h3>
                </div>

                <div>
                  {accordian === index ? (<><span className="vertical">-</span></>):(<><span className="vertical">-</span></>)}
                  
                </div>
                <div>
                  <p className={accordian === index ? "active" : "inactive"}>{item.choices[0].option}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
