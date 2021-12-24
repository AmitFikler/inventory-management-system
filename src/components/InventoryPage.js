import { useNavigate } from 'react-router-dom';
import AddItem from './AddItem';
import InventoryList from './InventoryList';

const InventoryPage = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/submit');
  };
  return (
    <>
      <InventoryList />
      <AddItem />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default InventoryPage;
