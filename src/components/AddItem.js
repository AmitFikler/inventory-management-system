import { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddItem = () => {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(1);

  const dispatch = useDispatch();

  const addNewItem = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { name: itemName, fullQuantity: itemQuantity, owner: true },
    });
  };

  return (
    <div>
      <fieldset className="add-item-form">
        <legend>Add Item:</legend>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={(e) => setItemName(e.target.value)}
        ></input>
        <br />
        <br />
        <label htmlFor="quantity">Quantity: </label>
        <input
          min={1}
          defaultValue={1}
          type="number"
          placeholder="quantity"
          name="quantity"
          onChange={(e) => setItemQuantity(e.target.value)}
        ></input>
        <br />
        <br />
        <button onClick={addNewItem}>Add</button>
      </fieldset>
    </div>
  );
};

export default AddItem;
