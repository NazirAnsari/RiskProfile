import React from 'react';
import Value from './Value'

export default function Data({id,select,nexttoggle}) {
  return (
   <>{
    id.choices.map((cal)=>{ 
          return <Value key={cal.score} nexttoggle={nexttoggle} select={select} {...cal}/>
        })
    }
   </>
  )
}
