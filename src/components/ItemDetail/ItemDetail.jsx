import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { useContext } from 'react'
import { cartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'


const ItemDetail = ({item}) => {

  //useContext
  const { addToCart } = useContext(cartContext)


  //Funcion para agregar al carrito
  const handlerAddToCart = (qtyOnAdd) =>{
    addToCart(item, qtyOnAdd)
  }
  return (
    <>
    <div className='containerCards'>
      <img src={item.imgUrl} alt={item.title} />
      <h4 className='tituloCards'>{item.title}</h4>
      <p className='descCards'>{item.description}</p>
      <span className='precioCards'>${item.price}</span>
      <ItemCount stock={item.stock} onAddToCart={handlerAddToCart}/>
      <Link to={'/cart'}><button>Terminar compra</button></Link>
    </div>
    </>
  )
}

export default ItemDetail