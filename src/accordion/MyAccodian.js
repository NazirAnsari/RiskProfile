import React, { useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Value from './Value';


export default function MyAccodian(props) {

    const [select,setselect] = useState(null);
    

  const toggle=(i)=>{
    if(select===i) return setselect(null);
    setselect(i);
  } 
  
 

  return (
    <>

        { props.data.map((id,i)=>{
         
     return <div className="container"  >
      
      <div  onClick={()=>{toggle(i)}}>
      <span className='design'>{id.serialNo}{". "}{id.question} </span>
       <span className='arrow'>{select===i ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}</span>
       </div>
      {
         <p className={select===i? 'show':'notshow'}>
          {
         
          id.choices.map((cal)=>{ 
            return <Value key={cal.score}   i={i} set={props.set} {...cal}/>
           
          })
        }
          </p>
        
         
      }
      
      
       </div>

    })}
    </>
  )
}
