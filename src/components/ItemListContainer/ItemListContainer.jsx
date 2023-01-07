import React from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './ItemListContainer.css'
const ItemListContainer = ({products}) => {
 let filtroProductos = []
  //Guardamos los parametros que nos llegan en params
    let params = useParams();
    console.log(params.categoryid)
  //Declaramos un useState para guardar el estado del producto
    const [productos, setProductos] = useState(products)

if (params.categoryid =! undefined) {
  let filtroProductos = products.filter((producto)=>{
    return parseInt(params.categoryid) === producto.category;})
    //setProductos(filtroProductos)
      useEffect(()=>{
      setProductos(filtroProductos);
      },[params.categoryid])
} else {
  const promiseProducts = new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(products)
    },2000)
  })
  promiseProducts.then((response)=>{
    console.log("atrodne")
    setProductos(response);
  })
}

  return (
    <section className='sectionCards'>
    <ItemList productos={productos}/>
    </section>
  )
}

export default ItemListContainer