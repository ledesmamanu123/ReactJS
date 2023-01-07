import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailCotainer from './components/ItemDetailContainer/ItemDetailContainer';

//Importamos el array de productos
import { products } from './components/mocks';


function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route exact  path='/' element={<ItemListContainer products={products} />}/>
      <Route exact path='/category/:categoryid' element={<ItemListContainer products={products} />}/>
      <Route exact path='/category/:categoryid/item/:id' element={<ItemDetailCotainer products={products} />}/>
      <Route exact path='/item/:id' element={<ItemDetailCotainer products={products} />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
