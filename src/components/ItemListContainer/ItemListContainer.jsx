import React from 'react'
import ItemList from '../ItemList/ItemList';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'
const ItemListContainer = ({productos}) => { 
    let filtroProductos = [];
    console.log(productos)
    let params = useParams();
        if (params){
        console.log(params)
        filtroProductos = productos.filter((producto)=>{
       return parseInt (params.categoryid) === producto.category;
    })
    }
  return (
    <>
    <h1 className='titulos'>Catálogo</h1>
    <section className='sectionCards'>
      {productos.map((producto, index)=>{
        return <div className='containerCards'key={index}>
                    <img src={producto.imgUrl} alt={producto.title} />
                    <h4>{producto.title}</h4>
                    <p>{producto.description}</p>
                    <span>${producto.price}</span>
                </div>
      })}
    </section>
    </>
  )
}

export default ItemListContainer