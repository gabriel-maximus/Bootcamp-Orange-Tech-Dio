import React from 'react'
import './styles.css'  

export default function Input({value}) {
  return (
    <div className='InputContainer'>
      <input className='InputContent' disabled value={value}></input>
    </div>
  )
}
