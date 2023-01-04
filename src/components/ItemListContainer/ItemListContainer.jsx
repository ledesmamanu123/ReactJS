import React from 'react'
import JuegosIcon from '../icons/JuegosIcon';
import ConsolasIcon from '../icons/ConsolasIcon';
import AccesoriosIcon from '../icons/AccesoriosIcon';
import ItemList from '../ItemList/ItemList';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'
const ItemListContainer = () => {

    
    const categories = [
        {id: 1, name:"Juegos", icon:<JuegosIcon />, href:"/Juegos"},
        {id: 2, name:"Consolas", icon:<ConsolasIcon />, href:"/Consolas"},
        {id: 3, name:"Accesorios", icon:<AccesoriosIcon />, href:"/Accesorios"}
    ];
    console.log({categories})
  return (
    <>
        <ul className='lista_categorias'>
            {categories.map((category, index)=>{
                return <li className='item_categorias' key={index}> {category.icon}<Link to={`${category.href}/${category.id}`} id={category.id}>{category.name}</Link></li>
            })}
        </ul>
    </>
  )
}

export default ItemListContainer