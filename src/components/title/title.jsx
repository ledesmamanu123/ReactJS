//Buena practica, crear los componentes como functions
//Exporar siempre nuestro componente para q cuando lo llamemos nos lo lea
import './title.css';



//Los componentes tienen q empezar con mayus
export default function Title({title, lists}){
    console.log(title)
    return(
        <div>
            <h1>{title}</h1>
            <ul>
                {lists.map((val, index)=>{
                    let keyUnica = `${index}_${val}`
                    return(
                        //Podemos agregar clases de css con className, o escribirlo inline con style ={{}}
                        <li className="colorTitulo" key={keyUnica}>{val}</li>
                    )
                })}
            </ul>
        </div>
    )

}