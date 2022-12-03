import React from 'react'
import './styles.css'

export default function Button({onClick}) {
  return (
    <button className='ClickButton' onClick={onClick}>Buscar!</button>
  )
}
