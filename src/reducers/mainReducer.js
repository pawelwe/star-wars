import { SET_BUSY, SET_ERROR, SET_PAGE } from '../actions';

const initialState = {
  isBusy: false,
  error: null,
  currentPage: 1,
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BUSY:
      return { ...state, isBusy: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};
