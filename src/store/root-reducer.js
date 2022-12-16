import { combineReducers } from 'redux';
import { tourReducer } from './tours/tour-reducer';
import { userReducer } from './user/user-reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  tours: tourReducer,
});
