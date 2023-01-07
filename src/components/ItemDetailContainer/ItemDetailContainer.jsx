import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const ItemDetailContainer = ({products}) => {
    const [item, setItem] = useState([])
    let params = useParams();
    console.log(params.id);
    console.log(item)
useEffect(()=>{
    if (params.id !== undefined) {
        console.log("si hay")
        let filtroItems = products.filter((producto)=>{
            return params.id === producto.id;
        });
        setItem(...filtroItems)
        console.log(item)
    }
},[params.id]);
return(
    <section className='sectionCards'>
    <ItemDetail item={item}/>
    </section>
)
}


export default ItemDetailContainer