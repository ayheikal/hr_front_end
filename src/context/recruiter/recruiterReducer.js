import {
  GET_JOB_INTERVIEWS,
  GET_REPORT,
} from '../types'
import { act } from 'react-dom/test-utils';
import { APPEND } from '../types';

export default (state, action) => {

  switch (action.type) {
    case GET_JOB_INTERVIEWS:
      return{
        ...state,
        jobInterviews:action.payload,
        loading:false
      }
      case GET_REPORT:
        return{
          ...state,
          applicant:action.applicant,
          jobInfo:action.jobInfo,
          report:action.report,
          quesanswer:action.quesanswer,
          loading:false,
        }


    case APPEND:
      return {
        ...state,
        questions: action.payload,
      };
    default:
      return state;
  }
};
