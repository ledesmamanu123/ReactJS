import React from 'react'
import { useState } from 'react'
import './ItemCount.css'


const ItemCount = ({stock}, {onChangeQuantity}) => {
    const [contador, setContador] = useState(0);
    console.log(onChangeQuantity)
    //Funcion para sumar
    const handlerAddCount = () =>{
        if(contador < stock){
          onChangeQuantity(contador + 1)
        setContador(contador + 1)
      }else{setContador(contador)}
    }

    //Funcion para restar
    const handlerLessCount = () =>{
      if (contador > 0){
        onChangeQuantity(contador - 1)
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
      <button className='btnAgregar' onClick={()=>{}}>Agregar al carrito</button>
      <button className='btnComprar' onClick={()=>{}}>Comprar</button>
    </div>
  )
}

export default ItemCount;