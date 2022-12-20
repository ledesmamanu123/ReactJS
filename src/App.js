import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Juegos from './components/Juegos/Juegos';
import Accesorios from './components/Accesorios/Accesorios';
import Consolas from './components/Consolas/Consolas';
function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route exact  path='/' element={<Home />}/>
      <Route exact path='/Juegos/:categoryid' element={<Juegos />}/>
      <Route exact path='/Consolas/:categoryid' element={<Consolas />}/>
      <Route exact path='/Accesorios/:categoryid' element={<Accesorios />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
