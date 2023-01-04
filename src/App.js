import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Juegos from './components/Juegos/Juegos';
import Accesorios from './components/Accesorios/Accesorios';
import Consolas from './components/Consolas/Consolas';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailCotainer from './components/ItemDetailContainer/ItemDetailContainer';


//Array de Productos
const products = [
  {id:"1c", title:"Playstation 2", price:800, description:" segunda consola de videojuegos de Sony", stock: 5, imgUrl:"https://http2.mlstatic.com/D_NQ_NP_923283-MLA40388393976_012020-O.jpg", category:"Consolas"},
  {id:"2c", title:"Playstation 3", price:1000, description:"tercera consola de videojuegos de Sony", stock: 10, imgUrl:"https://http2.mlstatic.com/D_NQ_NP_808574-MLA32706766958_102019-O.jpg", category:"Consolas"},
  {id:"3c", title:"Playstation 4", price:1200, description:"cuarta consola de videojuegos de Sony", stock: 15, imgUrl:"http://d2r9epyceweg5n.cloudfront.net/stores/942/309/products/ps41-f0112e1e42bc41691916137502801571-640-0.jpg", category:"Consolas"},
  {id:"4c", title:"Xbox One", price:1200, description:"consola fabricada por Microsoft", stock: 15, imgUrl:"https://http2.mlstatic.com/D_NQ_NP_980182-MLA52350579543_112022-O.jpg", category:"Consolas"},
  {id:"1j", title:"God Of War", price:70, description:"juego creado por Santa Monica Studios", stock:60, imgUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png", category:"Juegos"},
  {id:"2j", title:"Grand Theft Auto V", price:30, description:"juego creado por Rockstar Studios", stock:100, imgUrl:"https://compass-ssl.xbox.com/assets/a0/4f/a04f2744-74d9-4668-8263-e0261fbea869.jpg?n=GTA-V_GLP-Page-Hero-1084_1920x1080.jpg", category:"Juegos"},
  {id:"3j", title:"Spider-Man", price:80, description:"juego creado por Insomniac Games", stock:50, imgUrl:"https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png", category:"Juegos"},
  {id:"4j", title:"Halo 5", price:70, description:"juego creado por Bungie Studios", stock:20, imgUrl:"https://generacionxbox.com/wp-content/uploads/2019/02/Halo-5-Guardians.jpg", category:"Juegos"},
  {id:"1a", title:"Headphones Xiaomi", price:55, description:"Auriculares con cancelacion de sonido", stock:4, imgUrl:"https://http2.mlstatic.com/D_NQ_NP_861475-MLA44311415907_122020-O.jpg", category:"Accesorios"},
  {id:"2a", title:"Joystick PS4", price:25, description:"Mando original ps4", stock:10, imgUrl:"https://celularpark.com.ar/wp-content/uploads/2020/09/joystick-ps4-negro-v2-D_NQ_NP_850637-MLA26951667240_032018-F.jpg", category:"Accesorios"},
  {id:"3a", title:"Joystick PS5", price:65, description:"Mando háptico original ps5", stock:3, imgUrl:"https://eclypse.com.ar/wp-content/uploads/2022/11/ps5-violeta-piola.jpg", category:"Accesorios"},
  {id:"4a", title:"Joystick XBOX ONE", price:30, description:"Mando original de Xbox One", stock:4, imgUrl:"https://langtecnologia.com.ar/14720-large_default/joystick-xbox-one-inalambrico-blanco-microsoft.jpg", category:"Accesorios"}
];

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <ItemListContainer />
    <ItemDetailCotainer />
    <Routes>
      <Route exact  path='/' element={<Home productos={products} />}/>
      <Route exact path='/Juegos/:categoryid' element={<Juegos />}/>
      <Route exact path='/Consolas/:categoryid' element={<Consolas />}/>
      <Route exact path='/Accesorios/:categoryid' element={<Accesorios />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
