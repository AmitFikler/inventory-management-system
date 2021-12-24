import { useNavigate } from 'react-router-dom';
import AddItem from './AddItem';
import InventoryList from './InventoryList';
import SignatureCanvas from 'react-signature-canvas';
import { useReducer, useState } from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const InventoryPage = () => {
  const navigate = useNavigate();
  const sigPad = useRef(null);
  const [trimmedDataURL, setTrimmedDataURL] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'ADD_SIGNATURE', payload: trimmedDataURL });
  }, [trimmedDataURL]);

  const handleSubmit = () => {
    setTrimmedDataURL(sigPad.current.getTrimmedCanvas().toDataURL('image/png'));
    setTimeout(() => {
      navigate('/submit');
    }, 500);
  };
  return (
    <>
      <InventoryList />
      <AddItem />
      <SignatureCanvas
        ref={sigPad}
        penColor="black"
        canvasProps={{ width: 150, height: 100, className: 'sigCanvas' }}
      />
      <br />
      <button className="submit-form" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
};

export default InventoryPage;
