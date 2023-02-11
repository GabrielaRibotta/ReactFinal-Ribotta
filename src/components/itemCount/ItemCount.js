// Styles
import './ItemCount.css';

// Components
import {useState} from 'react';


const ItemCount = (props) => {
            //Count
            const [count,setCount] = useState(0);

            //Sumar
            const plusOne = () =>{
                if(count < props.stock){
                    setCount(count + 1);
                }
            }
    
            //Restar
            const minusOne = () =>{
                if(count > 0){
                    setCount(count - 1);
                }
            }
            // Agregar a carrito
            const onAdd = () =>{
                if(count !== 0){
                    alert("Producto añadido al carrito");
                }
            }
    
    return (
        <div className="countButton">
            <button onClick={plusOne}><i className="fa-solid fa-plus"></i></button>
            <div>{count}</div>
            <button onClick={minusOne}><i className="fa-solid fa-minus"></i></button>
            <button onClick={onAdd}>Comprar</button>
        </div>
    )
}



export default ItemCount;