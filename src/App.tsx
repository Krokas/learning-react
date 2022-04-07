import React from 'react';
import './App.css';
import ItemList from 'components/ItemList/ItemList.component';
import Form from './components/Form/Form.component';
import INoteList from './shared/interfaces/NoteList.interface';
import { CONSTANTS } from './shared/constants'


class App extends React.Component<any, INoteList> {
  constructor(props: any) {
    super(props);
    this.state = {notes: this.getLocalStorageNotes()};
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(note: string) {
    const notes = localStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEY);
    if (notes) {
      localStorage.setItem(CONSTANTS.LOCAL_STORAGE_KEY, `${notes}${CONSTANTS.LOCAL_STORAGE_SEPARATOR}${note}`);
    } else {
      localStorage.setItem(CONSTANTS.LOCAL_STORAGE_KEY, note)
    }
    this.setState({notes: [...this.state.notes, note]});
  }

  getLocalStorageNotes() : string[] {
    const notes = localStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEY);
    let noteArray : string[] = [];
    if (notes) {
      noteArray = notes.split(CONSTANTS.LOCAL_STORAGE_SEPARATOR);
    }

    return noteArray;
  }
  
  render() {
    return (
      <>
        <ItemList notes={this.state.notes} />
        <Form
          onFormSubmit={this.handleFormSubmit}
        />
      </>
    );
  }
}

export default App;
