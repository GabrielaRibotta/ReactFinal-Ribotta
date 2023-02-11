// Modules
import { Link } from 'react-router-dom';

// Styles
import './ItemDetail.css';

// Components
import Card from 'react-bootstrap/Card';
import ItemCount from '../../itemCount/ItemCount.js';

const ItemDetail = (props) => {

    const {title, price, description, image, stock} = props.data

    return (
        <div>
            <section className='tarjetasDetalle'>
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                            <br/>
                            ${price}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <ItemCount stock={stock} />
                <Link to='/productos'><button>Volver a Productos</button></Link>
            </section>
        </div>
    )
}



export default ItemDetail;