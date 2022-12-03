import React from 'react'
import './styles.css'

export default function Repos({repo}) {
  return (
    <div className='Container'>
        <h3 className='Title'>{repo.name}</h3>
        <p className='Text'>{repo.full_name}</p><br /><br />
        <a href={repo.svn_url} target='_blank'>Ver Repositório</a><br />
        <a href='#' className='Remover'>Remover</a>
        <hr className='Linha' />
    </div>
  )
}
