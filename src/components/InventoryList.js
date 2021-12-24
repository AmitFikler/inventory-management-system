import { useSelector } from 'react-redux';
import TableRow from './Tablerow';

const InventoryList = () => {
  const worker = useSelector((state) => state.workerReducer);
  const fullEquipmentList = useSelector((state) => state.inventoryReducer);
  return (
    <div>
      <h1>{worker.fullName}</h1>
      <div className="table-div">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Item's name</th>
              <th>Full quantity</th>
              <th>Current quantity</th>
              <th>Missing</th>
            </tr>
          </thead>
          <tbody>
            {fullEquipmentList.map((item, i) => {
              return [<TableRow item={item} i={i} key={i} />];
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryList;
