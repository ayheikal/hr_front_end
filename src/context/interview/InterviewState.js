import React, { useReducer } from 'react';
import InterviewReducer from './interviewReducer';
import InterviewContext from './interviewContext';
import {
  GET_QUESTIONS,
  SAVE_ANSWERS,
  INCREMENT_QUESTION_COUNTER,
  SET_STT,
  DELETE_STT,
} from '../types';
const InterviewState = (props) => {
  const initialState = {
    questions: [],
    answers: [],
    currentQuestion: 0,
    speechToText: '',
  };

  const [state, dispatch] = useReducer(InterviewReducer, initialState);

  const incrementQuestionCounter = () => {
    dispatch({
      type: INCREMENT_QUESTION_COUNTER,
      currentQuestion: state.currentQuestion,
    });
  };
  //set speech to text by using api webspeechregonizer
  const setSpeechToText = (text) => {
    dispatch({
      type: SET_STT,
      payload: text,
    });
  };
  //set speechtotext
  const deleteSpeechToText = () => {
    dispatch({
      type: DELETE_STT,
    });
  };
  //get the questions of the interview
  const getQuestions = () => {
    //axios get questions
    const res = [
      { id: 1, body: 'what is ur name' },
      { id: 2, body: 'what is ur last name' },
      { id: 3, body: 'what is ur age' },
    ];
    dispatch({
      type: GET_QUESTIONS,
      payload: res,
    });
  };
  // saveANswer
  const saveAnswer = (answer) => {
    //axios put answer
    dispatch({
      type: SAVE_ANSWERS,
      payload: answer,
    });
  };
  return (
    <InterviewContext.Provider
      value={{
        questions: state.questions,
        answers: state.answers,
        currentQuestion: state.currentQuestion,
        speechToText: state.speechToText,
        incrementQuestionCounter,
        getQuestions,
        saveAnswer,
        setSpeechToText,
        deleteSpeechToText,
      }}
    >
      {props.children}
    </InterviewContext.Provider>
  );
};

export default InterviewState;
