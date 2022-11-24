import React from 'react'
import './styles.css'

export default function Input({leftIcon, name, ...rest}) {
  return (
    <div className='InputContainer'>
        {leftIcon ? (<div className='IconContainer'>{leftIcon}</div>) : null}
        <input className='InputText' {...rest}></input>
    </div>
  )
}
