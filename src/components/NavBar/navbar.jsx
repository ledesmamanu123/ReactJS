import './navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
const Navbar = ({menus, children})=>{
    return(
        <nav className="navbar_local">
            <h1>Playz</h1>
            <ul className='ul_local'>

                {menus.map((item)=>{
                    return <li className='li_local'><a href="../../pages/Juegos">{item}</a></li>
                })}
            </ul>
            <div>
                <ItemListContainer />
                {children}
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar; 