// Styles
import './Home.css'

// Components
import ItemListContainer from '../itemListContainer/ItemListContainer.js';

const Home = () => {
    return (
        <ItemListContainer greeting="Bienvenido a la tienda" />
    )
}

export default Home;