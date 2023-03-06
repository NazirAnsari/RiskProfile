import React, { useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Value from './Value';

export default function MyAccodian(props) {
  const [show,setShow] = useState(false); 
  return (
    <>
      <div className="container">
      <span className='design'>{props.serialNo}{". "}{props.question} </span>
       <span className='arrow' onClick={() => setShow(!show)}>{show ? 
        <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}</span>
      
       
        
     
      {
        show &&<p>{
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
