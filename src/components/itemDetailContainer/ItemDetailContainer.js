//Modules
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore"
import { db } from '../../services/firebase';

// Styles
import './ItemDetailContainer.css';

// Components
import ItemDetail from './itemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const {productoId} = useParams();

    const [producto, setProducto] = useState([]);

    useEffect(()=>{
        const getProducto = async() =>{
            const consultaProducto = doc(db,"listaProductos",productoId);
            const respuestaProducto = await getDoc(consultaProducto);
            const producto = {
                ...respuestaProducto.data()
            }
            setProducto(<ItemDetail key={producto.id} id={"producto" + producto.id} data={producto} />)
        }
        getProducto();
    },[productoId]);

        return (
            <div className="itemDetailContainerDiv">
                {producto}
            </div>
        );
}


export default ItemDetailContainer;