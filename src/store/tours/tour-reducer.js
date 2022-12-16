import { TOURS_ACTION_TYPES } from './tour-types';

export const TOURS_INITIAL_STATE = {
  allTours: [],
};

export const tourReducer = (state = TOURS_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case TOURS_ACTION_TYPES.SET_ALL_TOUR:
      return { ...state, allTours: payload };
    default:
      return state;
  }
};
