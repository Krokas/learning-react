import React, {useState} from 'react';
import ItemList from 'components/ItemList/ItemList.component';
import Form from  'components/Form/Form.component';
import { getLocalStorageNotes, addLocalStorageNote, removeLocalStorageNote } from 'helpers/localStorage';

const NoteApp = () => {
    const [notes, setNotes] = useState(getLocalStorageNotes());

    const onFormSubmit = (note: string) => {
        addLocalStorageNote(note);
        setNotes([...notes, note]);
    }

    const onRemoveItem = (value: string) => {
        const notes = removeLocalStorageNote(value);
        setNotes(notes);
    }

    return (
        <>
            <ItemList notes={notes} onRemoveItem={onRemoveItem} />
            <Form onFormSubmit={onFormSubmit} />
        </>
    );   
}

export default NoteApp;