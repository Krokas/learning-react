import React from 'react';
import Item from './Item';
import IItemListProps from './shared/interfaces/ItemListProps.interface';

class ItemList extends React.Component<IItemListProps> {
    render() {
        return (
            <div>
                {this.props.items.map(item => <Item {...item} />)}
            </div>
        )
    }
}

export default ItemList