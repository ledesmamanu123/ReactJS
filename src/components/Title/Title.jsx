import React from 'react'
import './Title.css'
import Playz from '../icons/Playz'
import { Link } from 'react-router-dom'
const Title = ({name}) => {
  return (
    <Link to={"/"}>
      <div className='container_titulo'>
        <Playz />
        <h1 className='titulo'>{name}</h1>
      </div>
    </Link>
  )
}

export default Title