import { useState } from 'react';

const TableRow = ({ item, i }) => {
  const [currentQuantity, setCurrentQuantity] = useState(0);
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
    </tr>
  );
};

export default TableRow;
