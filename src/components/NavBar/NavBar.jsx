import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import Title from '../Title/Title'
import { Link } from 'react-router-dom';
import { categories } from '../mocks';
import './NavBar.css'
const NavBar = () => {

  return (
    <>
      <nav>
          <div className='title_cart'>
              <Title name="Playz" />
              <CartWidget />
          </div>
          <ul className='lista_categorias'>
              {categories.map((category, index)=>{
                  return <li className='item_categorias' key={index}> {category.icon}<Link to={`category/${category.id}`} id={category.id} name={category.name}>{category.name}</Link></li>
              })}
          </ul>
        </nav>
    </>
  )
}

export default NavBar