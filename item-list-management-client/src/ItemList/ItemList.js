import React from 'react';
import Item from '../Item/Item';
import { Paper, List, Divider } from '@material-ui/core';
import ItemPriority from '../constants/Priority';

function ItemList({items, removeItem, toggleItem, editItem}) {
  items.sort((a,b) => {
    if(a.priority===ItemPriority.Low    && b.priority===ItemPriority.Medium) return 1;
    if(a.priority===ItemPriority.Low    && b.priority===ItemPriority.High)   return 1;
    if(a.priority===ItemPriority.Medium && b.priority===ItemPriority.High)   return 1;
    if(a.priority===ItemPriority.Medium && b.priority===ItemPriority.Low)    return -1;
    if(a.priority===ItemPriority.High   && b.priority===ItemPriority.Low)    return -1;
    if(a.priority===ItemPriority.High   && b.priority===ItemPriority.Medium) return -1;
    return 0;
  });
  
  let itemsList = items.map( (item,index, items) => 
    (<React.Fragment key={item.id}>
      <Item
          {...item}
          removeItem={removeItem}
          toggleItem={toggleItem}
          editItem={editItem}
      />
      {(index < items.length - 1) ? <Divider /> : ""}
    </React.Fragment>));

  const styles = {
    paper: {
      padding: 10,
      paddingBottom: 0
    }
  };

  if(itemsList.length > 0) {
    return (
      <Paper style={styles.paper}  square={false}>
        <List>
          {itemsList}
        </List>
      </Paper>
    );
  }
  else {
    return null;
  }

}

export default ItemList;