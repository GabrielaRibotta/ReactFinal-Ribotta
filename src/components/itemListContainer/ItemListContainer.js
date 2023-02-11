// Styles
import './ItemListContainer.css';

// Components
import ItemList from './itemList/ItemList';


const ItemListContainer = (props) => {
    return (
        <main>
            <div className="greeting">
                <p>{props.greeting}</p>
            </div>
            <ItemList />
        </main>
    )
}


export default ItemListContainer;