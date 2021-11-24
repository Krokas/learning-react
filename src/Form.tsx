import React from 'react';

class Form extends React.Component {
    state = {
        newNote: ''
    };
    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(this.state.newNote);
        this.setState({ newNote: '' })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                    value={this.state.newNote}
                    onChange={event => this.setState({newNote: event.target.value})}
                    placeholder="New note"
                    required />
                <input type="submit" value="Add" />
            </form>
        );
    }
}

export default Form;