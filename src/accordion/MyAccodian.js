import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Value from "./Value";

export default function MyAccodian({ data }) {
  const[select,setSelected]=useState(null);

  const toggle=(i)=>{
      if(select===i){
         return setSelected(null)
      }

      setSelected(i)
  }
  return (
    <>
      {data.map((curEle, i) => {
     return   <div className="container" >
          <span className="design" >
            {curEle.serialNo}
            {". "}
            {curEle.question}{" "}
          </span>
          <span className="arrow" onClick={()=>toggle(i)}>
            {select===i ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </span>

          {
            <p className={select === i ?'content show' : 'content'}>
              {curEle.choices.map((id) => {
                const { score } = id;
                return <Value key={score} {...id} />;
              })}
            </p>
          }
        </div>;
      })}
    </>
  );
}
