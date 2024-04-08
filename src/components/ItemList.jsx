import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../reducers/itemReducer';

const ItemList = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items.items);

  const handleAddItem = () => {
    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      name: `Item ${items.length + 1}`,
    };
    dispatch(addItem(newItem));
  };

  const handleRemoveItem = id => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}{' '}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
