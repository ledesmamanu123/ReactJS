import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const ItemDetailContainer = ({products}) => {
    const [item, setItem] = useState([])
    let params = useParams();

useEffect(()=>{
    if (params.id !== undefined) {

        let filtroItems = products.filter((producto)=>{
            return params.id === producto.id;
        });
        setItem(...filtroItems)

    }
},[params.id]);
return(
    <section className='sectionCards'>
    <ItemDetail item={item}/>
    </section>
)
}


export default ItemDetailContainer