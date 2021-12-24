const ENTRY_WORKER = 'ENTRY_WORKER';

const initialState = {
  fullName: '',
  workplace: '',
  date: '',
};

export const workerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ENTRY_WORKER:
      const { fullName, workplace, date } = action.payload;
      return { fullName, workplace, date };
    case 'ADD_SIGNATURE':
      return { ...state, signature: action.payload };
    default:
      return { ...state };
  }
};
