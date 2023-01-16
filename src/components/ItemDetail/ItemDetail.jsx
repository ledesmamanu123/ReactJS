import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({item}) => {
  console.log({item})
  return (
    <>
    <div className='containerCards'>
      <img src={item.imgUrl} alt={item.title} />
      <h4 className='tituloCards'>{item.title}</h4>
      <p className='descCards'>{item.description}</p>
      <span className='precioCards'>${item.price}</span>
      <ItemCount stock={item.stock}/>
    </div>

    </>
  )
}

export default ItemDetail