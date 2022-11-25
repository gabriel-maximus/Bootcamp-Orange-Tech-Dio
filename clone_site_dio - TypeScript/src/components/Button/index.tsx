import React from 'react'
import './styles.css'
import {IButton} from './types';

export default function Button({title, variant="primary", onClick}:IButton) {
  return (
    <div className='ButtonContainer' onClick={onClick}>{title}</div>
  )
}
