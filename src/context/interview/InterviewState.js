import React, { useReducer } from 'react';
import axios from 'axios'
import {useHistory} from 'react-router-dom'
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
  const history = useHistory()
  const initialState = {
    questions: [],
    answers: [],
    currentQuestion: 0,
    speechToText: '',
    interviewId: null,
    remaining_time: 0
    
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
  // start interview
  const handleApply = (jobId, applicantId) => {
    // create interview
    axios
      .post(
        `${process.env.REACT_APP_HOST_NAME}/api/applicant/jobs/${jobId}/apply`,
        { job_id: jobId, applicant_id: applicantId },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((res) => {
        let jobId = res.data.data.job_id;
        let interviewId = res.data.data.id;
        state.remaining_time = res.data.data.remaining_time
        console.log('duration', res.data.data.remaining_time)
        console.log('created interview', jobId, interviewId);
        // redirect to the interview process
        let userId = localStorage.getItem('userId');
        history.push(
          `/users/${userId}/jobs/${jobId}/interviews/${interviewId}/`
        );
      })
      .catch((err) => {
        console.log('err :', err.response);
        history.push('/signin');
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
      null,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    )
      .then((res) => {
        console.log('endInterview: ', res);
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
        remaining_time: state.remaining_time,
        incrementQuestionCounter,
        getQuestions,
        saveAnswer,
        setSpeechToText,
        deleteSpeechToText,
        endInterview,
        handleApply,
      }}
    >
      {props.children}
    </InterviewContext.Provider>
  );
};

export default InterviewState;
