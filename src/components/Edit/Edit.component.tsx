import React, { useEffect, useState } from "react";
import { TEdit } from "types/Edit";
import "./Edit.css";

const Edit: React.FC<TEdit> = ({
  isOpen,
  item,
  index,
  onEdit,
  onCloseEdit,
}) => {
  const [note, setNote] = useState(item.note);
  const [dueDate, setDueDate] = useState(item.dueDate);
  const [itemIndex, setItemIndex] = useState(index);

  useEffect(() => {
    setNote(item.note);
    setDueDate(item.dueDate);
    setItemIndex(index);
  }, [item, index]);

  return (
    <>
      <div
        className={`Overlay ${isOpen ? "Visible" : ""}`}
        onClick={onCloseEdit}
      ></div>
      <div className={`Edit ${isOpen ? "Open" : ""}`}>
        <div className="Container">
          <h2>Edit note</h2>
          <div className="Control">
            <label htmlFor="note">Note</label>
            <input
              type="text"
              value={note}
              onChange={(event) => setNote(event.target.value)}
              id="note"
              placeholder="Note"
            />
          </div>
          <div className="Control">
            <label htmlFor="dueDate">Due Date</label>
            <input
              type="date"
              value={dueDate}
              onBlur={(event) => setDueDate(event.target.value)}
              placeholder="Due Date"
              id="dueDate"
            />
          </div>
          {onEdit && (
            <div className="Control">
              <button
                className="Button"
                onClick={() =>
                  onEdit({ note: note, dueDate: dueDate }, itemIndex)
                }
              >
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Edit;
