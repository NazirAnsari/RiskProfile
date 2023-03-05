import React, { useState } from 'react'
import {RiskData} from './api'
import MyAccodian from './MyAccodian';
import { Link } from 'react-router-dom';
import "./accodion.css";
export default function Accodion() {
    /* eslint-disable */
    const[data,setData]=useState(RiskData);
    return (
    <>
    <section className="main-div">
        <h1 className="main-div-color">Please complete the risk profile given below</h1>
      {
        data.map((curEle=>{
            return <MyAccodian key={curEle.serialNo} {...curEle}/>
        }))
      }
       
        <Link to="/ThankYouPage"><button  className='proceedbtn'>Proceed</button></Link>
      
      </section>
    </>
  )
}

