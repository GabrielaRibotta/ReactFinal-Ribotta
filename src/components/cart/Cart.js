// Modules
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { collection, getFirestore, addDoc } from "firebase/firestore"
import { db } from "../../services/firebase.js"

// Styles
import './Cart.css'

// Components
import { CartContext, useCartContext } from '../../context/CartContext';
import CartItem from '../cartItem/CartItem';


const Cart = () => {
    const {cartList, cartCount} = useCartContext(CartContext)
    console.log(cartList())

    const cartData = cartList()

    const listItems = cartData.map(item=>(
        <CartItem key={item.id} item={item}/>))

    const [inputs, setInputs] = useState({});

    const onInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
        }
    
    const [orderId, setOrderId] = useState(undefined);

    const sendOrder = async(event) => {
        event.preventDefault()
    const order = {
            buyer:{
            name : inputs.name,
            email: inputs.email,
            phone: inputs.phone
            },
            items: listItems,
        };
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(({id})=> setOrderId(id))
    }

    return (
        <div className='divCart'>
            {orderId !== "" ? (<p>Tu órden es {orderId}</p>) : ( '' )}
            {listItems.length >0 ? (
                <div>
                    <p>Tu orden continene {cartCount()} items</p>
                    <div>
                    {listItems}
                    </div>
                    <Link to='/productos'><button>Ver Productos</button></Link>
                    <hr />
                    <form>
                        <label>Nombre:
                            <input type="text" name="name" value={inputs.name || ""} onChange={onInput}/>
                        </label>
                        <label>E-mail:
                            <input type="text" name="email" value={inputs.email || ""} onChange={onInput}/>
                        </label>
                        <label>Telefono:
                            <input type="text" name="phone" value={inputs.phone || ""} onChange={onInput}/>
                        </label>
                        <button onClick={sendOrder}>Comprar</button>
                    </form>
                </div>
            ):(
            <div>
                <p>Tu carrito está vacío.</p><Link to='/productos'><button>Ver Productos</button></Link>
            </div>)}
        </div>
    )

}

export default Cart