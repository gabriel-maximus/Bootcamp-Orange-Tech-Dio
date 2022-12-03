import React from 'react'
import './styles.css'

export default function Repos() {
  return (
    <div className='Container'>
        <h3 className='Title'>Titulo</h3>
        <p className='Text'>Texto</p><br /><br />
        <a href='#'>Ver Repositório</a><br />
        <a href='#' className='Remover'>Remover</a>
        <hr className='Linha' />
    </div>
  )
}
