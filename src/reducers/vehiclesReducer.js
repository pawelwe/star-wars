import {
  SET_VEHICLE,
  SET_VEHICLES,
  SET_USER_NAMES,
  SET_VEHICLES_CACHED_DATA,
} from '../actions';

const initialState = {
  list: [],
  vehicle: null,
};

export const vehiclesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VEHICLES:
      return { ...state, list: action.payload };
    case SET_VEHICLE:
      return { ...state, vehicle: action.payload };
    case SET_USER_NAMES:
      return {
        ...state,
        vehicle: { ...state.vehicle, userNames: action.payload },
      };
    case SET_VEHICLES_CACHED_DATA:
      return {
        ...state,
        vehicle: Object.assign({}, action.payload),
      };
    default:
      return state;
  }
};
