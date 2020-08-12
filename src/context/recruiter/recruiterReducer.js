import { APPEND } from '../types';

export default (state, action) => {
  switch (action.type) {
    case APPEND:
      return {
        ...state,
        questions: action.payload,
      };
    default:
      return state;
  }
};
