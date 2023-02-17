// Styles
import './ItemCount.css';

// Components
import { useState } from 'react';


const ItemCount = (props) => {
            //Count
            let [count,setCount] = useState(0);

            //Sumar
            const plusOne = () =>{
                if(count < props.stock){
                    count++
                    setCount(count)
                    props.guardarCount(count)
                }else{
                    
                }
            }
    
            //Restar
            const minusOne = () =>{
                if(count > 0){
                    count--
                    setCount(count)
                    props.guardarCount(count)
                }
            }

    
    return (
        <div className="countButton">
            <button disabled={props.stock===0} onClick={(e)=>plusOne(e)}><i className="fa-solid fa-plus"></i></button>
            <div>{count}</div>
            <button disabled={props.stock===0} onClick={minusOne}><i className="fa-solid fa-minus"></i></button>
        </div>
    )
}



export default ItemCount;