import { fullEquipmentList } from '../db';

const initialState = [...fullEquipmentList];

export const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const item = action.payload;
      return [...state, item];
    default:
      return [...state];
  }
};
