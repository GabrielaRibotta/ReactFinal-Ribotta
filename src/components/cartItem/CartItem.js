// Styles
import './CartItem.css'

// Components
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartItem = ({item}) => {
    const {deleteItem} = useContext(CartContext)

    const totalItem = item.price * item.count

    return (
        <div /* className='cart-item-container' */>
            <div className='cartItem'>
                <p>Title: {item.title}</p>
                <p>Precio: {item.price}</p>
                <p>Cantidad: {item.count}</p>
                <p>Total: {totalItem}</p>
                <button onClick={()=>deleteItem(item.id)}>Quitar</button>
            </div>
        </div>
    )
}

export default CartItem