import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../context/cartContext'
const Xsquare = ({id}) => {

  const {deleteItem} = useContext(cartContext)

  return (
    <svg className='btnEliminarItem' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={()=>{deleteItem(id)}}><path d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-4.793 9.793-1.414 1.414L12 13.414l-2.793 2.793-1.414-1.414L10.586 12 7.793 9.207l1.414-1.414L12 10.586l2.793-2.793 1.414 1.414L13.414 12l2.793 2.793z"></path></svg>
  )
}

export default Xsquare