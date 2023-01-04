import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import Title from '../Title/Title'
import './NavBar.css'
const NavBar = () => {
  return (
    <>
      <nav>
          <div className='title_cart'>
              <Title name="Playz" />
              <CartWidget />
          </div>
      </nav>
    </>
  )
}

export default NavBar