import React from 'react'

export default function Value({option,i,set}) {
  // const [data,setdata] = useState(false);
  return (
    <div className="input">
      <input type="radio"  name={i} required value={option} onClick={()=>set(i)}  />{option}
                                                     
    </div>  
  )
}
