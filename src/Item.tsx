import React, {Component} from 'react';
import IItemProps from './shared/interfaces/ItemProps.interface'

class Item extends Component<IItemProps> {
    render() {
        const itemData = this.props;
        return (
            <div>
                {itemData.value}
            </div>
        )
    }
}

export default Item;