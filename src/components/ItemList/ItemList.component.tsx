
import {TItemList} from 'types/ItemList'
import Item from 'components/Item/Item.component'
import './itemList.css'

const ItemList: React.FC<TItemList> = ({notes, onRemoveItem}) => {

    return (
        <>
        <h1>Note App</h1>
        {notes.length > 0 &&
            <div className="ItemList">
                {notes.map((item, index) => <Item key={index} note={item} onRemoveItem={onRemoveItem} />)}
            </div>
        }
        </>
    );
}

export default ItemList;