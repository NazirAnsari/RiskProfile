import React, { useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Value from './Value';

export default function MyAccodian(props) {
  const [show,setShow] = useState(false); 
  return (
    <>
      <div className="main-heading">
      <h4 className='inner-div-question'>{props.serialNo}{". "}{props.question}
       <span className='inner-div-icon' onClick={() => setShow(!show)}>{show ? 
        <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}</span>
      </h4>
        {/* <p className='inner-div-icon' onClick={() => setShow(!show)}>{show ? 
        <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}</p> */}
        
     
      {
        show &&<p className='answer'>{
          // <input type="radio" id="options" name='opt' required/>}{props.choices[0].option} <br />
          // {<input type="radio" id="options" name='opt' required/>}{props.choices[1].option}
        props.choices.map((id)=>{
          const {score} =id;
          return <Value key={score} {...id}/>
        })
        }
          </p>

      }
       </div>

       
    </>
  )
}
