import React from 'react'
import './Item.css'
const Item = ({item}) => {
  return (

    <div className='containerCards'>
      <img src={item.imgUrl} alt={item.title} />
      <h4>{item.title}</h4>
      <p>{item.description}</p>
      <span>${item.price}</span>
    </div>

  )
}

export default Item