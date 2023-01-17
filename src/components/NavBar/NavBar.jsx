import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import Title from '../Title/Title'
import { Link } from 'react-router-dom';
import { categories } from '../mocks';
import { useState } from 'react';
import { themeContext } from '../../context/themeContext';
import './NavBar.css'
import { useContext } from 'react';
const NavBar = () => {

//Declarando el estado del tema 
const [theme, setTheme] = useState("light")


//Use Context
const {onChangeTheme} = useContext(themeContext)


const changeTheme = (e) =>{
  setTheme(e.target.value)
  onChangeTheme(theme)
}

  return (
    <>
      <nav className={`${theme === 'dark'? "dark" : "light"}`}>
          <div className={`title_cart ${theme === 'dark'? "dark" : "light"}`}>
              <Title name="Playz" />
              <CartWidget />
          </div>
          <div className='lista_categorias'>
          <div className='lista_theme'>
            <label htmlFor=""><input type="radio" name="theme_page" id="" value="dark" checked={theme === "dark" ? true : false} onChange={changeTheme}/>Dark</label>
            <label htmlFor=""><input type="radio" name="theme_page" id="" value="light" checked={theme === "light" ? true : false} onChange={changeTheme}/>Light</label>
          </div>
            <ul className='ul_navbar'>
                {categories.map((category, index)=>{
                    return <li className='item_categorias' key={index}> {category.icon}<Link to={`category/${category.id}`} id={category.id} name={category.name}>{category.name}</Link></li>
                })}
            </ul>
            <div style={{width:120}}></div>
          </div>
        </nav>
    </>
  )
}

export default NavBar