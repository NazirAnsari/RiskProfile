import React from 'react'

export default function Value({score,option,show}) {
  return (
    <div className="input">
      <input type="radio" name="opt" onClick={()=>show(!show)}/>{option}
    </div>
  )
}
