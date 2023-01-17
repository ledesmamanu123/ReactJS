export function cartReducer(state,action){


    //Inicializamos un array donde se van a guardar los productos que nos lleguen
    const listaProductos = [];

    //Dependiendo de el tipo de accion que nos llegue hará lo siguiente
    switch (action.type) {

        //Agregamos un item
        case "ADD_ITEMS":

        console.log({paso:3,state,action})

          if(action.payload.qty > 0){
            listaProductos.push(action.payload.item);
            console.log(listaProductos)
            }else{console.log("Error")}
            return{
                ...state,
                quantity:action.payload.qty,
                product:[action.payload.item],
                productsAdded: [...listaProductos]
            } 
            
        default:
            listaProductos.push(state.product);
            break;
            
    }
}