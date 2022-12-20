import React from 'react'
import { useParams } from 'react-router-dom'
const Juegos = () => {
  const {categoryid} = useParams();
  return (
    <>
    <div>Juegos {categoryid}</div>
    </>
  )
}

export default Juegos