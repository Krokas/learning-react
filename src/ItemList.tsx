import React from 'react';
import Item from 'components/Item/Item.component';
import INoteList from './shared/interfaces/NoteList.interface';
import './itemList.css'


class ItemList extends React.Component<INoteList> {
    render() {
        return (
            <div className="ItemList">
                {this.props.notes.map((item, index) => 
                    <Item key={index} note={item} />)
                }
            </div>
        )
    }
}

export default ItemList