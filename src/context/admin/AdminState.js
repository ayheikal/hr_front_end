import adminContext from './adminContext';
import React, { useReducer } from 'react';
import AdminContext from './adminContext';
import AdminReducer from './adminReduce';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import {
  CREATE_SKILL,
  UPDATE_SKILL,
  DELETE_SKILL,
  ADD_QUESTION,
  UPDATE_QUESTION,
  DELETE_QUESTION,
  GET_SKILLS,
  SET_ADMIN_LOADING,
  GET_SKILL_BY_ID,
  GET_QUESTIONS,
} from '../types';
import Axios from 'axios';

const AdminState = (props) => {
  const history = useHistory();
  const initialState = {
    skills: [],
    skill: {},
    questions: [],
    question: {},
    loading: false,
  };
  const [state, dispatch] = useReducer(AdminReducer, initialState);
  const setLoading = () => dispatch({ type: SET_ADMIN_LOADING });

  //add skills
  const createSkill = (skillObject) => {
    console.log('createSkill: ', skillObject);
    axios
      .post(
        `${process.env.REACT_APP_HOST_NAME}/api/admin/skills`,
        skillObject,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((res) => {
        history.push('/admin/skills');
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  const updateSkill = (skillObject, skillId) => {
    axios
      .put(
        `${process.env.REACT_APP_HOST_NAME}/api/admin/skills/${skillId}`,
        skillObject,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((res) => {
        history.push('/admin/skills');
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  const deleteSkill = (skillId) => {
    console.log('delete skill', skillId);
    axios
      .delete(
        `${process.env.REACT_APP_HOST_NAME}/api/admin/skills/${skillId}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const getSkills = () => {
    setLoading();
    axios
      .get(`${process.env.REACT_APP_HOST_NAME}/api/admin/skills`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        console.log('getSkills', res);
        dispatch({
          type: GET_SKILLS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const getSkilById = (skillId) => {
    axios
      .get(`${process.env.REACT_APP_HOST_NAME}/api/admin/skills/${skillId}`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        console.log('getSkills', res);
        dispatch({
          type: GET_SKILL_BY_ID,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  const createQuestion = (questionBody) => {
    axios
      .get(
        `${process.env.REACT_APP_HOST_NAME}/api/admin/questions`,
        questionBody,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((res) => {
        console.log('created', res);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  const deleteQuestion = (questionId) => {
    axios
      .delete(
        `${process.env.REACT_APP_HOST_NAME}/api/admin/questions/${questionId}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((res) => {
        console.log('deleted', res);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  const UpdateQuestion = (questionBody, questionId) => {
    axios
      .put(
        `${process.env.REACT_APP_HOST_NAME}/api/admin/questions/${questionId}`,
        questionBody,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((res) => {
        console.log('updated', res);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  const getQuestions = () => {
    setLoading();
    axios
      .get(`${process.env.REACT_APP_HOST_NAME}/api/admin/questions`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        console.log('getQuestions', res);
        dispatch({
          type: GET_QUESTIONS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  const getSkillById = (id) => {
    setLoading();
    axios
      .get(`${process.env.REACT_APP_HOST_NAME}/api/admin/skills/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        console.log('getQuestions', res);
        dispatch({
          type: GET_SKILL_BY_ID,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  return (
    <AdminContext.Provider
      value={{
        skills: state.skills,
        loading: state.loading,
        skill: state.skill,
        questions: state.questions,
        createSkill,
        deleteQuestion,
        deleteSkill,
        UpdateQuestion,
        updateSkill,
        createQuestion,
        getSkills,
        getQuestions,
        getSkillById,
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminState;
