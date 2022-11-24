//Importamos componentes
import Navbar from '../../components/NavBar/navbar';
//Componente inicial
const Initial = () =>{
    const menus = ['Inicio', 'Juegos', 'Nosotros']

    return(
        <div>
            <Navbar menus={menus}>
            </Navbar>
        </div>
    )
}

export default Initial;