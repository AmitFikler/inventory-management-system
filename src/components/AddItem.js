import { useState } from 'react';

const AddItem = () => {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');

  return (
    <div>
      <fieldset className="add-item-form">
        <legend>Add Item:</legend>
        <label htmlFor="name">Name: </label>
        <input type="text" placeholder="name" name="name"></input>
        <br />
        <br />
        <label htmlFor="quantity">Quantity: </label>
        <input type="number" placeholder="quantity" name="quantity"></input>
        <br />
        <br />
        <button>Add</button>
      </fieldset>
    </div>
  );
};

export default AddItem;
