import React from 'react';
import './App.css';
import ItemList from './ItemList';
import Form from './Form';
import INoteList from './shared/interfaces/NoteList.interface';


class App extends React.Component<any, INoteList> {
  constructor(props: any) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {notes: []};
  }

  handleFormSubmit(note: string) {
    this.setState({notes: [...this.state.notes, note]});
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
