import { createAction } from '../../utils/reducer/reducer-utils';
import { TOURS_ACTION_TYPES } from './tour-types';

export const setAllTour = (tours) =>
  createAction(TOURS_ACTION_TYPES.SET_ALL_TOUR, tours);
