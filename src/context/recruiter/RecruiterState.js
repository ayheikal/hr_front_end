import React, { useReducer } from 'react';
import RecruiterReducer from './recruiterReducer';
import recruiterContext from './recruiterContext';
import axios from 'axios';
import { APPEND, GET_SKILL, GET_QUESTION } from '../types';
const RecruiterState = (props) => {
  const initialState = {
    questions: [],
    skill: {},
    questions: [],
  };

  const [state, dispatch] = useReducer(RecruiterReducer, initialState);
  const getQuestionsOfSkills = (arrayOfSKillIds) => {
    console.log(localStorage.getItem('token'));
    axios
      .get(`${process.env.REACT_APP_HOST_NAME}/api/recruiter/questions`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        params: { skills: arrayOfSKillIds },
      })
      .then((res) => {
        console.log('result:', res);

        dispatch({
          type: APPEND,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  const getSkillById = (id) => {
    axios
      .get(`${process.env.REACT_APP_HOST_NAME}/api/recruiter/skills/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        console.log('result:', res);

        dispatch({
          type: GET_SKILL,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log('hey', err.response.data.message);
      });
  };
  const getQuestions = (id) => {
    axios
      .get(`${process.env.REACT_APP_HOST_NAME}/api/recruiter/questions/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        console.log('result:', res);

        dispatch({
          type: GET_QUESTION,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };
  return (
    <recruiterContext.Provider
      value={{
        questions: state.questions,
        skill: state.skill,
        questions: state.questions,
        getQuestionsOfSkills,
        getSkillById,
        getQuestions,
      }}
    >
      {props.children}
    </recruiterContext.Provider>
  );
};

export default RecruiterState;
