import { fullEquipmentList } from '../db';

const initialState = {
  fullEquipmentList,
};

export const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
