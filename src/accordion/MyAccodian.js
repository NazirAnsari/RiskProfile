import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Value from "./Value";
// import DataSave from "./DataSave";

export default function MyAccodian({ data,set}) {
  const[select,setSelected]=useState(null);
  // eslint-disable-next-line
  const[arr,setArr] =useState([]);

  // const [items, setItems] = useState([
  //   { value: '' },
  //   { value: '' },
  //   { value: '' }
  // ])

  const toggle=(i)=>{
      if(select===i){
         return setSelected(null)
      }

      setSelected(i)
  }

  // const onChange = (( value) => {
  //   setItems(prevItems => prevItems.map((item, select) => {
  //     return onChange !== select ? item : { value: value }
  //   }))
    
  // }, [])

  // const nextToggle=(i)=>{
  //   setSelected(++i)
  // }
// const arrayStore = (arrS)=>{
//  setArr({
//   arr : arrS
//  })
//  console.log(arr)
// }

// let flag =false;

// const checkedRadioButton = (select,data.serialNo)=>{

// }

  return (
    <>
      {data.map((curEle, i) => {
     return   <div className="container"  key={i}>
      <div onClick={()=>toggle(i)}>
          <span className="design" >
            {curEle.serialNo}
            {". "}
            {curEle.question}{" "}
          </span>
          <span className="arrow" >
            {select===i ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </span>
          
</div>

          {
            <p className={select === i ?'content show' : 'content hide'}>
              { curEle.choices.map((id) => {
                const { score } = id;
    
                return <Value key={score} {...id}  select={i}  set={set}
                />;
              })}

              {/* <DataSave curEle={curEle}  select={select} nextToggle={nextToggle} arr={arr}/> */}

              
            </p>
          }
        </div>;
      })}
    </>
  );
}
