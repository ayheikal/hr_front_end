import { SET_LOADING, GET_POSITIONS, GET_POSITION } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_POSITIONS:
      return {
        ...state,
        positions: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_POSITION:
      return {
        ...state,
        positions: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
