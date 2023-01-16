import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { useState } from 'react'
const ItemDetail = ({item}) => {
  const {cantidad, setCantidad} = useState(0);

  const handlerAddCount = (quantityOnAdd)=>{
    setCantidad(quantityOnAdd)
    console.log(cantidad)
  }

  return (
    <div className='containerCards'>
      <img src={item.imgUrl} alt={item.title} />
      <h4 className='tituloCards'>{item.title}</h4>
      <p className='descCards'>{item.description}</p>
      <span className='precioCards'>${item.price}</span>
      <ItemCount stock={item.stock} onChangeQuantity={(e)=>handlerAddCount(e)}/>
    </div>
  )
}

export default ItemDetail