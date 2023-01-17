import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../context/cartContext'


const Cart = () => {
  const {cart, removeList, deleteItem, totalPrice, totalItem} = useContext(cartContext)
  console.log(cart)
  return (
    <div>
      <h1>Carrio</h1>
      {cart.map((item)=>{
          return <>
          <img src={item.imgUrl} alt="" />
          
          </>
      })}
    </div>
  )
}

export default Cart