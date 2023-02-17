//Modules
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import CartProvider from './context/CartContext.js';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import Home from './components/home/Home.js';
import AboutUs from './components/aboutUs/AboutUs.js';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Cart from './components/cart/Cart.js';


function App() {

  return (
    <CartProvider>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/nosotros' element={<AboutUs />} />
            <Route exact path='/productos' element={<ItemListContainer/>} />
            <Route exact path='/producto/:productoId' element={<ItemDetailContainer/>} />
            <Route exact path='/category/:categoryId' element={<ItemListContainer />} />
            <Route exact path='/carrito' element={<Cart/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
      </CartProvider>
  );
}

export default App;
