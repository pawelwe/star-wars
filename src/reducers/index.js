import { combineReducers } from 'redux';
import { mainReducer } from './mainReducer';
import { peopleReducer } from './peopleReducer';
import { vehiclesReducer } from './vehiclesReducer';
import { planetsReducer } from './planetsReducer';

export default combineReducers({
  main: mainReducer,
  people: peopleReducer,
  vehicles: vehiclesReducer,
  planets: planetsReducer,
});
