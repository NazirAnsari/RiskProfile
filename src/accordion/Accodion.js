import React, { useState } from 'react'
import {RiskData} from './api'
import MyAccodian from './MyAccodian';
import { useNavigate } from 'react-router-dom';
import "./accodion.css";

export default function Accodion() {
   
    const[value,setvalue]=useState(false);
    const [data, setdata] = useState(new Set());
    const [selected,setselected]=useState(false);
    const [obj,setobj]=useState({key:''});

    const set=(i,val)=>{
      if(!data.has(i)){
        data.add(i);
        setdata(data);
       
      }
      setobj((preValue)=>({...preValue,[i]:val}))
      if(data.size==11){
        setselected(true);
      }
      console.log(obj);
    }

    const navigate=useNavigate();
    function handleSubmit(e){
      e.preventDefault();
      navigate('/ThankYouPage');
    }
   
    return (
    <>
    <section className={`sec ${value && 'cont'}`}>
        <h4>Please complete the risk profile given below</h4>
        
            <MyAccodian  data={RiskData} set={set}/>
       
          <button  className='proceedbtn' disabled={!selected} onClick={()=>(setvalue(true))}>Proceed</button>
          
    </section>
    
      
    {value && 
   
      <form className='popup'  onSubmit={handleSubmit}>
      <div>
      <label htmlFor="name">Name</label><br />
      <input type="text" className="data" required/>
      </div>
     
      <div>
      <label htmlFor="email">Email</label> <br />
      <input type="email" className="data" required/>
      </div>

      <div>
      <label htmlFor="Mobile">Mobile</label><br />
      <input type="tel" className="data" required/>
      </div>
      
      <button type='submit'>Submit</button> <br />
      
      </form>
      }
      
    </>
  )
}

