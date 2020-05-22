import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const useItemState = (initialItems) => {
  const [items, setItems] = useState(initialItems);

  const addItem = (newItem, priority) => {
    setItems([...items, {id : uuid(), description : newItem, priority : priority, crossedOff: false}])
  }

  const removeItem = (id) => {
    const filteredItems = items.filter(item => item.id !== id);
    setItems(filteredItems);
  }

  const toggleItem = (id) => {
    const updatedItems = items.map(item => (
      item.id === id ? {...item, crossedOff: !item.crossedOff} : item
    ));
    setItems(updatedItems);
  }

  const editItem = (editedItem) => {
    const updatedItems = items.map(item => (
      item.id === editedItem.id ? {...editedItem} : item
    ));
    setItems(updatedItems);
  }

  return [items, addItem, removeItem, toggleItem, editItem];
}

export default useItemState;
