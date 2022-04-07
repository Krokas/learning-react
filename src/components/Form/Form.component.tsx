import React, { useState } from 'react';
import {TForm} from 'types/Form';
import './Form.css';

const Form: React.FC<TForm> = ({onFormSubmit}) => {
    const [note, setNote] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onFormSubmit(note);
        setNote("");
    }

    return (
        <form onSubmit={handleSubmit} className="Form">
            <input 
                type="text"
                value={note}
                onChange={event => setNote(event.target.value)}
                placeholder="New note"
                required />
            <input type="submit" value="Add" />
        </form>
    )
}

export default Form;