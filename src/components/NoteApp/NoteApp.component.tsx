import Edit from "components/Edit/Edit.component";
import Form from "components/Form/Form.component";
import ItemList from "components/ItemList/ItemList.component";
import {
  addLocalStorageNote,
  getLocalStorageNotes,
  removeLocalStorageNote,
} from "helpers/localStorage";
import React, { useState } from "react";
import { TItem } from "types/Item";

const NoteApp = () => {
  const [items, setItem] = useState(getLocalStorageNotes());
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [itemToEdit, setItemToEdit] = useState({
    note: "",
  });
  const [itemToEditIndex, setItemToEditIndex] = useState(-1);

  const onFormSubmit = (note: string) => {
    const item: TItem = { note: note };
    addLocalStorageNote(item);
    setItem([...items, item]);
  };

  const onRemoveItem = (value: string) => {
    const notes = removeLocalStorageNote(value);
    setItem(notes);
  };

  const onEditItem = (item: TItem, index: number) => {
    setItemToEdit(item);
    setItemToEditIndex(index);
    editIsOpen ? setEditIsOpen(false) : setEditIsOpen(true);
  };

  const onEdit = (item: TItem, index: number) => {
    console.log(item, index);
  };

  return (
    <>
      <h1>Note App</h1>
      <ItemList
        items={items}
        onRemoveItem={onRemoveItem}
        onEditItem={onEditItem}
      />
      <Form onFormSubmit={onFormSubmit} />
      <Edit
        isOpen={editIsOpen}
        item={itemToEdit}
        onCloseEdit={() => setEditIsOpen(false)}
        onEdit={onEdit}
        index={itemToEditIndex}
      />
    </>
  );
};

export default NoteApp;
