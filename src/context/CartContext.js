// Modules
import { useContext, createContext, useState } from "react";

export const CartContext = createContext([]);
export const useCartContext = () => {return useContext(CartContext)}

const CartProvider = ({children}) => {
    
    const [items, setItems] = useState([]);

    const cartList = () => {
        return items
    }
    const cartCount = () => {
        return items.length
    }

    const addItem = (data) => {
        if(checkProductInCart(data.id)){
            alert("El producto ya está en el carrito.")
        }else {
            const listCart = items;
            listCart.push(data);
            setItems(listCart)
            console.log(items)
        }
    }

    const deleteItem = (id) =>{
        const newListCart = items.filter(e => e.id !== id)
        setItems(newListCart)
    }

    const deleteCart = () =>{
        setItems([])
    }

    const checkProductInCart = (id) =>{
        if(items.find(e=> e.id === id)){
            return true
        }else {
            return false
        }
    }

    return(
        <CartContext.Provider value={{items, cartList, cartCount, addItem, deleteItem, deleteCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider