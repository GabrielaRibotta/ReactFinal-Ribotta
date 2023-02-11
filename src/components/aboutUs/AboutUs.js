// Modules
import { Link } from 'react-router-dom';

// Styles
import './AboutUs.css'

const AboutUs = () => {
    return (
        <main>
            <div className='nosotros'>
                <p>Somos una tienda de libros online</p>
                <Link to="/productos"><button>Ver Productos</button></Link>
            </div>
        </main>

    )
}

export default AboutUs;