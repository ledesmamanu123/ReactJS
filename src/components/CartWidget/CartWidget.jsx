import React, { useContext } from 'react'
import CartIcon from '../icons/CartIcon'
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { cartContext } from '../../context/cartContext'
const CartWidget = () => {

  //useContext
  const {cart} = useContext(cartContext)
  console.log(cart)
  return (
    <div>
        <span>Cantidad de productos: {cart.length}</span>
        <Link to={'/cart'}> 
        <CartIcon />
        </Link>
    </div>
  )
}

export default CartWidget