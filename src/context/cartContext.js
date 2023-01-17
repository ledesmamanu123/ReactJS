// import { createContext, useReducer } from "react";
// import { cartReducer } from "./cartReducer";

// export const cartContext = createContext([])


// const initialState = {
//     quantity: 0,
//     product: {},
//     arrayProductos:[]
// }


// export const CartContextProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(cartReducer, initialState)
//     function addToCart(item, qty){
//          dispatch({
//             type:"ADD_ITEMS",
//             payload: {item, qty}
//          })
//     }
//     function removeList() {
//     }
//     const deleteItem = (id) => {
//         	//implementa la funcionalidad para borrar un producto del carrito
//     }
//     return (
//         <cartContext.Provider value={{addToCart, removeList, deleteItem}}>
//             { children }
//         </cartContext.Provider>
//     );
// }

import {createContext, useReducer} from 'react'
import { cartReducer} from './cartReducer'

//Creamos un contexto
export const cartContext = createContext(null)


//Inicializamos el estado del useReducer
const initialState = {
    //Guardamos cantidad, el producto, y el array de productos agregados
    quantity: 0,
    product:{},
    productsAdded:[]
}



export const CartContextProvider =({children}) =>{
    //Declaramos el useReducer, le mandamos nuestra funcion cartReducer, y el estado inicial
    const [state,dispatch] = useReducer(cartReducer,initialState)

    function addToCart(item, qty){
        console.log(state)
        console.log({paso:2, qty, item})
        dispatch({ //implementamos la funcion dispatch, para ejecutar la funcion de cartReducer
            type:"ADD_ITEMS",
            payload:{qty, item}
        })
    }
    const deleteItem = (id) => {	//implementa la funcionalidad para borrar un producto del carrito
    }
    const removeList = () => {	//implementa la funcionalidad para dejar el carrito vacío
    }



    return(
        <cartContext.Provider
        value={{
            quantity:state.quantity,
            product:state.product,
            productsAdded:state.productsAdded,
            addToCart,
        }}
        >
            {children}
        </cartContext.Provider>
    )
}