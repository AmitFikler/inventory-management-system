import { useNavigate } from 'react-router-dom';
import AddItem from './AddItem';
import InventoryList from './InventoryList';
import SignatureCanvas from 'react-signature-canvas';
import { useState } from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const InventoryPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sigPad = useRef(null);
  const [trimmedDataURL, setTrimmedDataURL] = useState(null);

  useEffect(() => {
    dispatch({ type: 'ADD_SIGNATURE', payload: trimmedDataURL });
  }, [trimmedDataURL]);

  const handleSubmit = () => {
    setTrimmedDataURL(sigPad.current.getTrimmedCanvas().toDataURL('image/png'));
    setTimeout(() => {
      navigate('/submit');
    }, 150);
  };
  return (
    <>
      <InventoryList />
      <AddItem />
      <div style={{ marginTop: '1%' }}>
        <div>Signature: </div>
        <SignatureCanvas
          name="signature"
          ref={sigPad}
          penColor="black"
          canvasProps={{ width: 270, height: 70, className: 'sigCanvas' }}
        />
      </div>
      <br />
      <button className="submit-form" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
};

export default InventoryPage;
