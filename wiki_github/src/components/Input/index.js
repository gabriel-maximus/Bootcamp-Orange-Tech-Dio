import React from 'react'
import './styles.css'

export default function Input({value, onChange}) {
  return (
    <div className='InputContainer'>
        <input className='InputField' value={value} onChange={onChange}></input>
    </div>
  )
}
