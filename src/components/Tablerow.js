import { useState } from 'react';
import { useDispatch } from 'react-redux';

const TableRow = ({ item, i }) => {
  const [currentQuantity, setCurrentQuantity] = useState(0);
  const dispatch = useDispatch();

  const removeItem = (index) => {
    dispatch({ type: 'REMOVE_ITEM', payload: index });
  };
  return (
    <tr>
      <td>{i}</td>
      <td>{item.name}</td>
      <td>{item.fullQuantity}</td>
      <td>
        <input
          min={0}
          defaultValue={0}
          type="number"
          onChange={(e) => setCurrentQuantity(e.target.value)}
        />
      </td>
      <td>
        {item.fullQuantity - currentQuantity < 0
          ? 0
          : item.fullQuantity - currentQuantity}
      </td>
      {item.owner ? (
        <td>
          <button
            onClick={() => {
              removeItem(i);
            }}
          >
            X
          </button>
        </td>
      ) : (
        <></>
      )}
    </tr>
  );
};

export default TableRow;
