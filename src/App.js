import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route exact  path='/' element={Home}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
