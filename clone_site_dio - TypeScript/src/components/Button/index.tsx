import React from 'react'
import './styles.css'

export default function Button({title, variant="primary", onClick}) {
  return (
    <div className='ButtonContainer' variant={variant} onClick={onClick}>{title}</div>
  )
}
