import React from 'react';
import './App.css';
import ItemList from './ItemList';
import Form from './Form';

class App extends React.Component {
  notes = []
  render() {
    return (
      <>
        <ItemList items={this.notes} />
        <Form />
      </>
    );
  }
}

export default App;
