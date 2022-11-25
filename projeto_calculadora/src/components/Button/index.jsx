import React from 'react'
import './styles.css'

export default function Button({label, onClick}) {
  return (
    <button className='ButtonContainer' onClick={onClick}>{label}</button>
  )
}
