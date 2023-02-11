//Modules
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../../services/firebase';

// Styles
import './ItemList.css';

// Components
import Item from '../item/Item.js';

const ItemList = (props) => {

    const [productos, setProductos] = useState([]);
    const {productoId} = useParams();
    const {categoryId} = useParams();

    useEffect(()=>{
        const getData = async()=>{
            const consultaFireb = categoryId ? query(collection(db, "listaProductos"), where("category", "==", categoryId)) : collection(db, "listaProductos");
            const respuestaFireb = await getDocs(consultaFireb);
            const productosFireb = respuestaFireb.docs.map(doc=>{
                const datosFireb ={
                    ...doc.data()
                }
                return datosFireb
            })
            setProductos(productosFireb.map( producto => <Item key={producto.id} id={"producto" + producto.id} data={producto} />))
        }
        getData();

    },[productoId, categoryId]);

        return (
            <div className="itemListDiv">
                {productos}
            </div>
        );
}


export default ItemList;