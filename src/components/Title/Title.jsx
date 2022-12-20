import React from 'react'
import './Title.css'
import Playz from '../icons/Playz'
const Title = ({name}) => {
  return (
    <a href="/">
      <div className='container_titulo'>
        <Playz />
        <h1 className='titulos'>{name}</h1>
      </div>
    </a>
  )
}

export default Title