import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const productsDetails =[
    {id:1, name:"GodOfWar", desc:"Juego de Santa Mónica Studios", price:50, img:"dfvdf"},
    {id:2, name:"GTAV", desc:"Juego deRockstar", price:80, img:"dfvdf"},
    {id:3, name:"FIFA23", desc:"Juego de EA Sports", price:70, img:"dfvdf"}
]
const getItem = new Promise((resolve) => {
    setTimeout(()=>{
        resolve(productsDetails.godOfWar)
    },2000)    
})
const ItemDetailContainer = () => {
    getItem.then(sendItem)
    function sendItem(resolve){
        <ItemDetail item={resolve} />
    }
}

export default ItemDetailContainer