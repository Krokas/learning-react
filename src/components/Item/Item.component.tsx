
import {TItem} from 'types/Item';
import './item.css';

const Item: React.FC<TItem> = ({note}) => {
    const handleClick = () => {
        console.log('click')
    }

    return (
        <div className="Item">
            <span>{note}</span>
            <button onClick={() => handleClick()}>Done!</button>
        </div>
    )
}

export default Item;