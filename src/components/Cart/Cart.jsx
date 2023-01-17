import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../context/cartContext'
import TrashIcon from '../icons/TrashIcon'
import Xsquare from '../icons/Xsquare'
import './Cart.css'


const Cart = () => {
  const {cart, removeList, deleteItem, totalPrice, totalItem} = useContext(cartContext)
  
  return (
    <div className='padreContainerCart'>
    <h1 className='tituloCatalogo'> Lilita Carrio</h1>
    <div className='container_cart'>
      {cart.map((item, index)=>{
          return <div className='lista_cart' key={index}>
              <img src={item.imgUrl} alt={item.title}/>
              <h2>{item.title}</h2>
              <div className='container_items'>
                <span>Precio por unidad: ${item.price}</span>
                <span>Cantidad: {item.qty}</span>
              </div>
                <Xsquare id={item.id}/>
          </div>
      })}
    </div>
    <div className='containerPriceTotal'>
      <span className='priceTotal'>Precio total:</span>
      <span className='priceTotal' style={{fontWeight:'bold'}}>${totalPrice()}</span>
      <button className='btnEliminarCart' onClick={()=>{removeList()}}><TrashIcon/>Eliminar carrito</button>
    </div>
    </div>)
}

export default Cart