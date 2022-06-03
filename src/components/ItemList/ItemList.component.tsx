import Item from "components/Item/Item.component";
import { TItemList } from "types/ItemList";
import "./itemList.css";

const ItemList: React.FC<TItemList> = ({ items, onRemoveItem, onEditItem }) => {
  return (
    <>
      {items.length > 0 && onEditItem && (
        <>
          <h2>Notes</h2>
          <div className="ItemList">
            {items.map((item, index) => (
              <Item
                key={index}
                note={item.note}
                dueDate={item.dueDate}
                onRemoveItem={onRemoveItem}
                onEditItem={() => onEditItem(item, index)}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ItemList;
