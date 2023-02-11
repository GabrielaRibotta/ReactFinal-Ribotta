//Modules
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import Home from './components/home/Home.js';
import AboutUs from './components/aboutUs/AboutUs.js';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />}> </Route>
          <Route exact path='/home' element={<Home />}> </Route>
          <Route exact path='/nosotros' element={<AboutUs />}> </Route>
          <Route exact path='/productos' element={<ItemListContainer/>}></Route>
          <Route exact path='/producto/:productoId' element={<ItemDetailContainer/>}></Route>
          <Route exact path='/category/:categoryId' element={<ItemListContainer />}></Route>
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
