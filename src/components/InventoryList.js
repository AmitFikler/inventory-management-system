import { useSelector } from 'react-redux';

const InventoryList = () => {
  const worker = useSelector((state) => state.workerReducer);
  const fullEquipmentList = useSelector((state) => state.inventoryReducer);
  console.log(fullEquipmentList);
  return (
    <div>
      <h1>{worker.fullName}</h1>
      <table>
        <tr>
          <th>#</th>
          <th>Item's name</th>
          <th>Full quantity</th>
          <th>Current quantity</th>
          <th>Missing</th>
        </tr>
        <tbody>
          {fullEquipmentList.map((item, i) => {
            return [
              <tr key={i}>
                <td>{i}</td>
                <td>{item.name}</td>
                <td>{item.fullQuantity}</td>
                <td>
                  <input type="number" />
                </td>
                <td>?</td>
              </tr>,
            ];
          })}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryList;
