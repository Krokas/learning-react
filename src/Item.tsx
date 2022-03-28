import React, {Component} from 'react';
import INote from './shared/interfaces/Note.interface';

class Item extends Component<INote> {
    render() {
        return (
            <div>
                {this.props.note}
            </div>
        )
    }
}

export default Item;