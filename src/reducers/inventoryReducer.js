import { fullEquipmentList } from '../db';

const initialState = [...fullEquipmentList];

export const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const item = action.payload;
      return [...state, item];

    case 'REMOVE_ITEM':
      const arrayAfterFilter = state.filter((item, i) => i !== action.payload);
      return [...arrayAfterFilter];
    default:
      return [...state];
  }
};
