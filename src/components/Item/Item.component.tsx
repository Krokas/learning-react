import { TItem } from "types/Item";
import "./item.css";

const Item: React.FC<TItem> = (
  { note, dueDate, onRemoveItem, onEditItem },
  index
) => {
  return (
    <div className="Item">
      {onEditItem && (
        <button
          className="ItemLabel"
          onClick={() =>
            onEditItem({ note, dueDate, onRemoveItem, onEditItem }, index)
          }
        >
          {note}
        </button>
      )}
      {onRemoveItem && (
        <button className="ItemRemove" onClick={() => onRemoveItem(note)}>
          Done!
        </button>
      )}
    </div>
  );
};

export default Item;
