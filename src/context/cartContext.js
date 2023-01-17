import {createContext, useState} from 'react'

//Creamos un contexto
export const cartContext = createContext([])



export const CartContextProvider =({children}) =>{
    //Declaramos el useState
    const [cart, setCart] = useState([])
    console.log(cart)

    //Funcion para evitar repetidos
    const isInCart = (id) => 
    cart.find((item) => item.id === id) ? true : false;

    //Agregamos el producto al carrito
    const addToCart = (producto, qty) => {
            if(isInCart(producto.id)){
                
                setCart(cart.map(prod => {
                    return prod.id === producto.id ? {...prod, qty: (prod.qty += qty)} : prod;
                })
                ) //sumamos la cantidad si es el mismo producto
            } else{
                setCart([...cart, {...producto, qty}])}
    }


    //Borramos un item del carrito
    const deleteItem = (id) => {	
        let newCart = cart.filter((prodCart)=> prodCart.id !== id);
        setCart(newCart)
    }


    //Vaciamos el carrito
    const removeList = () => {	
        setCart([]);
    }


    //Calculo del precio total
    const totalPrice = () =>{
        return cart.reduce((prev, act)=> prev + act.qty * act.price ,0);
    };


    //Calculo de cantidad de productos
    const totalItem = () =>{
        let total = 0;
        cart.forEach(itemInCart => {
            total = total + itemInCart.qty
        });
        return total;
    }

    return(
        <cartContext.Provider
        value={{cart, addToCart, removeList, deleteItem, totalPrice, totalItem}}>
            {children}
        </cartContext.Provider>
    )
}