import React from 'react'
import { useParams } from 'react-router-dom'
const Juegos = () => {
  const {categoryid} = useParams();
  console.log(categoryid)
  return (
    <>
    <h1>Juegos</h1>
    </>
  )
}

export default Juegos