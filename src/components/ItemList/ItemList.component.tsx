import Item from "components/Item/Item.component";
import { TItemList } from "types/ItemList";
import "./itemList.css";

const ItemList: React.FC<TItemList> = ({ notes, onRemoveItem }) => {
  return (
    <>
      {notes.length > 0 && (
        <>
          <h2>Notes</h2>
          <div className="ItemList">
            {notes.map((item, index) => (
              <Item key={index} note={item} onRemoveItem={onRemoveItem} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ItemList;
