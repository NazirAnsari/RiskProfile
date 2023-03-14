import React, { useState } from 'react'
import {RiskData} from './api'
import MyAccodian from './MyAccodian';
import { Link } from 'react-router-dom';
import "./accodion.css";
export default function Accodion() {
    /* eslint-disable */
    // const[data,setData]=useState(RiskData);
    const[value,setvalue]=useState(false);
    const [data, setdata] = useState(new Set());
    const [selected,setselected]=useState(false);
    const set=(val)=>{
      if(!data.has(val)){
        data.add(val);
        setdata(data);
      }
      if(data.size==11){
        setselected(true);
      }
      console.log(data);
    }
   
    return (
    <>
    <section className={`sec ${value && 'cont'}`}>
        <h4>Please complete the risk profile given below</h4>
        
            <MyAccodian  data={RiskData} set={set}/>
       
       
        
          <button  className='proceedbtn' disabled={!selected} onClick={()=>(setvalue(true))}>Proceed</button>
          
    </section>
    
      
    {value && 
   
      <div className='popup'>
      <div>
      <label htmlFor="name">Name</label><br />
      <input type="text" className="data" />
      </div>
     
      <div>
      <label htmlFor="email">Email</label> <br />
      <input type="email" className="data" />
      </div>

      <div>
      <label htmlFor="Mobile">Mobile</label><br />
      <input type="tel" className="data"/>
      </div>
      <Link to="/ThankYouPage">
      <button type='submit'>Submit</button> <br />
      </Link>
      </div>
      }
      
    </>
  )
}

