import React from 'react'

const ItemDetail = ({item}) => {
  console.log({item})
  return (
    <div className='containerCards'>
      <img src={item.imgUrl} alt={item.title} />
      <h4 className='tituloCards'>{item.title}</h4>
      <p>{item.description}</p>
      <span>${item.price}</span>
    </div>
  )
}

export default ItemDetail