import React, { useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Value from './Value';

export default function MyAccodian(props) {
  const [select,setselect] = useState(null);
  const toggle=(i)=>{
    if(select===i) setselect(null);
    setselect(i);
  } 
  return (
    <>

        { props.data.map((id,i)=>{
         
     return <div className="container">
      
      <span className='design'>{id.serialNo}{". "}{id.question} </span>
       <span className='arrow' onClick={() => toggle(i)}>{select===i ? 
        <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}</span>
      
      {
         (select===i) && <p>{
        id.choices.map((cal)=>{ 
          return <Value key={cal.score} {...cal}/>
        })
        
        }
          </p>

      }
     
       </div>

    })}
    </>
  )
}
