import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productos}) => {
  return (
    <>
      {productos.map((producto, index)=>{
        return <Item item={producto} key={index} />
      })} 
    </>
  )
}

export default ItemList