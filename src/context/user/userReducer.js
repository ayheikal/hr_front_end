import {
  GET_ALL_USERS,
  SET_USER_LOADING,
  GET_USER,
  SET_APPLICANT_PROCESSING_INTERVIEW,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SET_USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case SET_APPLICANT_PROCESSING_INTERVIEW:
      return {
        ...state,
        userAppliedJobs: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
