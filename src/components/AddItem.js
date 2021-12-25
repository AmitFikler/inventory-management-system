import { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddItem = () => {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(1);

  const dispatch = useDispatch();

  const addNewItem = () => {
    if (!itemName || !itemQuantity) {
      return;
    }
    dispatch({
      type: 'ADD_ITEM',
      payload: { name: itemName, fullQuantity: itemQuantity, owner: true },
    });
  };

  return (
    <div>
      <fieldset className="add-item-form">
        <legend>Add Item:</legend>
        <div className="form-el">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={(e) => setItemName(e.target.value)}
          ></input>
        </div>
        <div className="form-el">
          <label htmlFor="quantity">Quantity: </label>
          <input
            min={1}
            defaultValue={1}
            type="number"
            placeholder="quantity"
            name="quantity"
            onChange={(e) => setItemQuantity(e.target.value)}
          ></input>
        </div>
        <br />
        <button onClick={addNewItem}>Add</button>
      </fieldset>
    </div>
  );
};

export default AddItem;
