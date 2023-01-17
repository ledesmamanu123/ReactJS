import React from 'react'
import { useState } from 'react'
import './ItemCount.css'


const ItemCount = ({onChangeQuantity, stock}) => {
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

    //Funcion que manda la cantidad
    const sendQuantity = () =>{
      onChangeQuantity(contador)
    }
  return (
    <div className='itemCountContainer'>
      <div className='itemsCountContainer'>
          <button className='btn_menos' onClick={()=>handlerLessCount()}>-</button>
          <span>{contador}</span>
          <button className='btn_mas' onClick={()=>handlerAddCount()}>+</button>
      </div>
      <button className='btnAgregar' onClick={()=>{sendQuantity()}}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount;