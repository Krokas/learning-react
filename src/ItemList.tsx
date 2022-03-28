import React from 'react';
import Item from './Item';
import INoteList from './shared/interfaces/NoteList.interface';


class ItemList extends React.Component<INoteList> {
    render() {
        return (
            <div>
                {this.props.notes.map((item, index) => 
                    <Item key={index} note={item} />)
                }
            </div>
        )
    }
}

export default ItemList