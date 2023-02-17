// Modules
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Styles
import './ItemDetail.css';

// Components
import Card from 'react-bootstrap/Card';
import ItemCount from '../../itemCount/ItemCount.js';
import { CartProvider, useCartContext } from '../../../context/CartContext.js';

const ItemDetail = (props) => {

    const {id, title, price, category, description, image, stock} = props.data

    // Definir cantidad
    const [cantidadCompra, setCantidadCompra] = useState(0);

    const guardarCantidad = (count) =>{
        setCantidadCompra(count)
    }

    // Agregar a carrito
    const {addItem} = useCartContext();

    const onAdd = () =>{
        if(cantidadCompra !== 0){
            const producto = {
                id: id,
                title: title,
                category: category,
                price: price,
                count: cantidadCompra,
            }
            addItem(producto);
        } else{
            alert("Seleccione la cantidad que desea agregar al carrito.")
        }
    }

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
                            <br/>
                            Stock disponible: {stock}
                        </Card.Text>
                    </Card.Body>
                    <div className='botones'>
                        <ItemCount stock={stock} guardarCount={guardarCantidad} />
                        <button onClick={onAdd}>Comprar</button>
                        <Link to='/productos'><button>Volver a Productos</button></Link>
                    </div>
                </Card>
            </section>
        </div>
    )
}



export default ItemDetail;