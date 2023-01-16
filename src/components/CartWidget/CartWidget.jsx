import React from 'react'
import CartIcon from '../icons/CartIcon'
import './CartWidget.css'
import { Link } from 'react-router-dom'
const CartWidget = () => {
  return (
    <div>
        <span>3</span>
        <Link to={'/cart'}> 
        <CartIcon />
        </Link>
    </div>
  )
}

export default CartWidget