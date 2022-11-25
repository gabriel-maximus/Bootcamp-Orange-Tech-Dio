import React from 'react'
import './styles.css'
import { IInput } from './types'

export default function Input({leftIcon, name, ...rest}:IInput) {
  return (
    <div className='InputContainer'>
        {leftIcon ? (<div className='IconContainer'>{leftIcon}</div>) : null}
        <input className='InputText' {...rest}></input>
    </div>
  )
}
