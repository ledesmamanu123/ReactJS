import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../context/cartContext'


const Cart = () => {
  const context = useContext(cartContext)

  console.log(context)
  return (
    <div>Cart</div>
  )
}

export default Cart