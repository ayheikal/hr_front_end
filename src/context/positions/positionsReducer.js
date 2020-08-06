import {
  SET_LOADING,
  GET_POSITIONS,
  GET_POSITION,
  GET_POSITIONS_OF_RECRUITER,
  SET_ERROR,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_POSITIONS:
      return {
        ...state,
        positions: action.payload,
        currentpage:action.currentpage,
        numberOfPages:action.numberOfPages,
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
    case GET_POSITIONS_OF_RECRUITER:
      return {
        ...state,
        recruiterPositions: action.payload,
        loading: false,
      };
      case SET_ERROR:
        return{
          ...state,
          error:action.error,
        }
    default:
      return state;
  }
};
