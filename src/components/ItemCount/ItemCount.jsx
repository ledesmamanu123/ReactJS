import React from 'react'
import { useState } from 'react'
import './ItemCount.css'
import { Link } from 'react-router-dom'


const ItemCount = ({onAddToCart, stock}) => {
    const [contador, setContador] = useState(0);
    

    //Funcion para sumar
    const handlerAddCount = () =>{
        if(contador < stock){
        setContador(contador + 1)
      }else{setContador(contador)}
    }


    //Funcion para restar
    const handlerLessCount = () =>{
      if (contador > 0){
        setContador(contador - 1)
      }else{setContador(contador)}
    }


  return (
    <div className='itemCountContainer'>
      <div className='itemsCountContainer'>
          <button className='btn_menos' onClick={()=>handlerLessCount()}>-</button>
          <span>{contador}</span>
          <button className='btn_mas' onClick={()=>handlerAddCount()}>+</button>
      </div>
      <button className='btnAgregar' onClick={()=>{onAddToCart(contador)}}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount;