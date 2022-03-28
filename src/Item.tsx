import React, {Component} from 'react';
import INote from './shared/interfaces/Note.interface';
import './Item.css'

class Item extends Component<INote> {
    handleClick() {
        console.log(this);
    }
    render() {
        return (
            <div className="Item">
                <span>{this.props.note}</span>
                <button onClick={() => this.handleClick()} >Done!</button>
            </div>
        )
    }
}

export default Item;