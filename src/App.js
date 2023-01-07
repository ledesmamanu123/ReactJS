import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Juegos from './components/Juegos/Juegos';
import Accesorios from './components/Accesorios/Accesorios';
import Consolas from './components/Consolas/Consolas';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailCotainer from './components/ItemDetailContainer/ItemDetailContainer';

//Importamos el array de productos
import { products } from './components/mocks';


function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <ItemDetailCotainer />
    <Routes>
      <Route exact  path='/' element={<ItemListContainer products={products} />}/>
      <Route exact path='/category/:categoryid' element={<ItemListContainer products={products} />}/>
      <Route exact path='/category/:categoryid' element={<Consolas />}/>
      <Route exact path='/category/:categoryid' element={<Accesorios />}/>
      <Route exact path='/item/:id' element={<ItemDetailCotainer/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
