import React, {Component} from 'react';
import INote from './shared/interfaces/Note.interface';
import './Item.css'

class Item extends Component<INote> {
    render() {
        return (
            <div className="Item">
                {this.props.note}
            </div>
        )
    }
}

export default Item;