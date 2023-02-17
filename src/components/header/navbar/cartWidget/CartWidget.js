// Styles
import { CartContext, useCartContext } from '../../../../context/CartContext';
import './CartWidget.css'

const CartWidget = () => {

    const {cartCount} = useCartContext(CartContext)
    const getcartNumber = ()=>{cartCount()}
    const cartNumber = getcartNumber()
    console.log(cartNumber)

    return (
        <i className="fa-solid fa-cart-shopping">
            {' '}{cartNumber?(<span>{cartNumber}</span>):('')}
        </i>
    )
}


export default CartWidget;