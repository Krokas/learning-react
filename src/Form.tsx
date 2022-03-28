import React from 'react';
import INote from './shared/interfaces/Note.interface';


interface IProps {
    onFormSubmit: (note: string) => void
}

class Form extends React.Component<IProps, INote> {
    constructor(props: IProps) {
        super(props);
        this.state = {note: ''}
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.setState({ note: '' })
        this.props.onFormSubmit(this.state.note)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                    value={this.state.note}
                    onChange={event => this.setState({note: event.target.value})}
                    placeholder="New note"
                    required />
                <input type="submit" value="Add" />
            </form>
        );
    }
}

export default Form;