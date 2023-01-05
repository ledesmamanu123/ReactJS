import React from 'react'
import './Home.css'
const Home = ({productos}) => {
  console.log({productos})
  return (
    <>
    <h1 className='titulos'>Catálogo</h1>
    <section className='sectionCards'>
      {productos.map((producto, index)=>{
        return <div className='containerCards'key={index}><img src={producto.imgUrl} alt={producto.title} /><h4>{producto.title}</h4><p>{producto.description}</p><span>${producto.price}</span></div>
      })}
    </section>
    </>
  )
}

export default Home