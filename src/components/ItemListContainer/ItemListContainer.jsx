import React from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './ItemListContainer.css'
const ItemListContainer = ({products}) => {
  //Guardamos los parametros que nos llegan en params
    let params = useParams();

  //Declaramos un useState para guardar el estado del producto
    const [productos, setProductos] = useState([])

useEffect(()=>{
  if (params.categoryid !== undefined) {
    let filtroProductos = products.filter((producto)=>{
      return parseInt (params.categoryid) === producto.category;
    })
      setProductos(filtroProductos);
  } else {
    const promiseProducts = new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve(products)

      },1000)
    })
    promiseProducts.then((response)=>{

      setProductos(response);
    })
  }
},[params.categoryid])

  return (
    <>
    <h1 className='tituloCatalogo'>Catálogo</h1>
    <section className='sectionCards'>
      <ItemList productos={productos}/>
    </section>
    </>
  )
}

export default ItemListContainer