import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { useState, useContext } from 'react'
import { cartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'


const ItemDetail = ({item}) => {

  //useState
  const [cantidad, setCantidad] = useState();
  //useContext
  const { addToCart } = useContext(cartContext)

  
  
  //Seteamos el estado "cantidad" con el estado que nos llega del children
  const onAdd = (qtyOnAdd)=>{
    setCantidad(qtyOnAdd)

  }


  //Funcion para agregar al carrito
  const handlerAddToCart = () =>{
    console.log({paso:1, cantidad, item})

    //Ejecutamos la funcion que traemos del cartContext
    addToCart(item, cantidad)
  }

  return (
    <div className='containerCards'>
      <img src={item.imgUrl} alt={item.title} />
      <h4 className='tituloCards'>{item.title}</h4>
      <p className='descCards'>{item.description}</p>
      <span className='precioCards'>${item.price}</span>
      <ItemCount stock={item.stock} onChangeQuantity={onAdd}/>
      <Link to={"/cart"}><button className='btnComprar' onClick={()=>{handlerAddToCart()}}>Comprar</button></Link>
    </div>
  )
}

export default ItemDetail