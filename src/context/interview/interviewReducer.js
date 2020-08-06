import {
  GET_QUESTIONS,
  SAVE_ANSWERS,
  INCREMENT_QUESTION_COUNTER,
  SET_STT,
  DELETE_STT,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };
    case INCREMENT_QUESTION_COUNTER:
      return {
        ...state,
        currentQuestion: action.currentQuestion + 1,
      };
    case SAVE_ANSWERS:
      return {
        ...state,
        answers: action.payload,
      };
    case SET_STT:
      return {
        ...state,
        speechToText: action.payload,
      };
    case DELETE_STT:
      return {
        ...state,
        speechToText: null,
      };
    default:
      return state;
  }
};
