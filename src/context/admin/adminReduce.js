import {
  GET_SKILLS,
  GET_QUESTIONS,
  GET_SKILL_BY_ID,
  SET_ADMIN_LOADING,
  GET_QUESTION_BY_ID,
  GET_MODEL_ANSWER_BY_ID,
  GET_MODEL_ANSWERS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_SKILLS:
      return {
        ...state,
        skills: action.payload,
        loading: false,
      };
    case SET_ADMIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_SKILL_BY_ID:
      return {
        ...state,
        skill: action.payload,
        loading: false,
      };
    case GET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
        loading: false,
      };
    case GET_QUESTION_BY_ID:
      return {
        ...state,
        question: action.payload,
        loading: false,
      };
    case GET_MODEL_ANSWER_BY_ID:
      return {
        ...state,
        modelAnswer: action.payload,
        loading: false,
      };
    case GET_MODEL_ANSWERS:
      return {
        ...state,
        modelAnswers: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
