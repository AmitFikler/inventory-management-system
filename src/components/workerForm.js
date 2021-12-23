import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const WorkerForm = () => {
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState('');
  const [workplace, setWorkplace] = useState('');
  const [date, setDate] = useState('');

  const navigate = useNavigate();

  const submitForm = () => {
    console.log({ fullName, workplace, date });
    if (!fullName || !workplace || !date) {
      return;
    }
    dispatch({
      type: 'ENTRY_WORKER',
      payload: { fullName, workplace, date },
    });
    navigate('/inventory');
  };

  return (
    <div>
      <label htmlFor="full-name">Full Name: </label>
      <input
        name="full-name"
        type="text"
        placeholder="Enter Full Name..."
        onChange={(e) => setFullName(e.target.value)}
      ></input>
      <br />
      <label htmlFor="work-place">Workplace: </label>
      <input
        name="work-place"
        type="text"
        placeholder="Enter Workplace..."
        onChange={(e) => setWorkplace(e.target.value)}
      ></input>
      <br />
      <label htmlFor="date">Date: </label>
      <input
        name="date"
        type="date"
        onChange={(e) => setDate(e.target.value)}
      ></input>
      <br />
      <button onClick={submitForm}>Submit</button>
    </div>
  );
};
export default WorkerForm;
