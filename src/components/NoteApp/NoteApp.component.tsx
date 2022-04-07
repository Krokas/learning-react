import React, {useState} from 'react';
import ItemList from 'components/ItemList/ItemList.component';
import Form from  'components/Form/Form.component';
import { getLocalStorageNotes, addLocalStorageNote } from 'helpers/localStorage';

const NoteApp = () => {
    const [notes, setNotes] = useState(getLocalStorageNotes());

    const onFormSubmit = (note: string) => {
        addLocalStorageNote(note);
        setNotes([...notes, note]);
    }

    return (
        <>
            <ItemList notes={notes}/>
            <Form onFormSubmit={onFormSubmit} />
        </>
    );   
}

export default NoteApp;