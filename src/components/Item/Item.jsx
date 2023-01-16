import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'
const Item = ({item}) => {
  return (

    <Link to={`item/${item.id}`} className='containerCards'> 
    <div>
      <img src={item.imgUrl} alt={item.title} />
      <h4 className='tituloCards'>{item.title}</h4>
      <span className='precioCards'>${item.price}</span>
    </div>
    </Link>

  )
}

export default Item