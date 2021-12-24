import { useSelector } from 'react-redux';

const SubmitPage = () => {
  const worker = useSelector((state) => state.workerReducer);
  const fullEquipmentList = useSelector((state) => state.inventoryReducer);

  const missingEquipment = fullEquipmentList.filter((item) => item.missing > 0);
  return (
    <>
      <h1>Thank you for submitting!</h1>
      {missingEquipment.length ? (
        missingEquipment.map((item) => {
          return (
            <div>
              Missing {item.missing} {item.name}
            </div>
          );
        })
      ) : (
        <h1>All equipment is found and ready for shift!</h1>
      )}
      <div>
        <br />
        {worker.fullName} <br />
        {worker.date} <br />
      </div>
    </>
  );
};

export default SubmitPage;
