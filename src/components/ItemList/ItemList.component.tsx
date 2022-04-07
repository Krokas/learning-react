
import {TItemList} from 'types/ItemList'
import Item from 'components/Item/Item.component'
import './itemList.css'

const ItemList: React.FC<TItemList> = ({notes}) => {

    return (
        <div className="ItemList">
            {notes.map((item, index) => <Item key={index} note={item} />)}
        </div>
    );
}

export default ItemList;