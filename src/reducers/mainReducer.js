import { SET_BUSY, SET_ERROR } from '../actions';

const initialState = {
  isBusy: false,
  error: null,
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BUSY:
      return { ...state, isBusy: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
