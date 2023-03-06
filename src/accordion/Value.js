import React from 'react'

export default function Value({score,option}) {
  return (
    <div inputclassName='input'>
      <input type="radio" name="opt"/>{option}
    </div>
  )
}
