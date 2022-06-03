import { TItem } from "types/Item";
import "./item.css";

const Item: React.FC<TItem> = ({ note, onRemoveItem }) => {
  return (
    <div className="Item">
      <span>{note}</span>
      <button onClick={() => onRemoveItem(note)}>Done!</button>
    </div>
  );
};

export default Item;
