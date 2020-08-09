import React, { useReducer } from 'react';
import InterviewReducer from './interviewReducer';
import InterviewContext from './interviewContext';
import {
  GET_QUESTIONS,
  SAVE_ANSWERS,
  INCREMENT_QUESTION_COUNTER,
  SET_STT,
  DELETE_STT,
  SET_INTERVIEW_ID,
} from '../types';
import Axios from 'axios';
const InterviewState = (props) => {
  const initialState = {
    questions: [],
    answers: [],
    currentQuestion: 0,
    speechToText: '',
    interviewId: null,
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
  const getQuestions = (interviewId) => {
    //axios get questions
    Axios.get(
      `${process.env.REACT_APP_HOST_NAME}/api/applicant/interviews/${interviewId}/questions`,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    )
      .then((res) => {
        console.log('questions:', res.data.data);
        dispatch({
          type: GET_QUESTIONS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log('question error: ', err.response);
      });
  };
  // saveANswer
  const saveAnswer = (answer, questionId, interviewId) => {
    return Axios.post(
      `${process.env.REACT_APP_HOST_NAME}/api/applicant/interviews/${interviewId}/questions/${questionId}/answers`,
      answer,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //ennd interview
  const endInterview = (interviewId) => {
    Axios.post(
      `${process.env.REACT_APP_HOST_NAME}/api/applicant/interviews/${interviewId}/submit`,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    )
      .then((res) => {
        console.log('endInterview: ', interviewId);
      })
      .catch((err) => {
        console.log('err: ', err.response);
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
        endInterview,
      }}
    >
      {props.children}
    </InterviewContext.Provider>
  );
};

export default InterviewState;
