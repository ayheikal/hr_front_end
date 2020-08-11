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
  GET_QUESTION_BY_ID,
  GET_SKILLS,
  SET_ADMIN_LOADING,
  GET_SKILL_BY_ID,
  GET_QUESTIONS,
  GET_MODEL_ANSWERS,
  GET_MODEL_ANSWER_BY_ID,
} from '../types';
import Axios from 'axios';

const AdminState = (props) => {
  const history = useHistory();
  const initialState = {
    skills: [],
    skill: {},
    questions: [],
    question: {},
    modelAnswers: [],
    modelAnswer: {},
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
    const role = localStorage.getItem('role');
    let link = null;
    if (role === 'admin') link = 'admin';
    else if (role === 'recruiter') link = 'recruiter';
    else link = '';
    setLoading();
    axios
      .get(`${process.env.REACT_APP_HOST_NAME}/api/${link}/skills`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
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
      .post(
        `${process.env.REACT_APP_HOST_NAME}/api/admin/skills/${questionBody.skill_id}/questions`,
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
        history.push('/admin/skills');
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
        window.location.reload();
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
        history.push('/admin/skills');
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  const getQuestionsOfSkill = (skillId) => {
    setLoading();
    axios
      .get(
        `${process.env.REACT_APP_HOST_NAME}/api/admin/skills/${skillId}/questions`,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((res) => {
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
        dispatch({
          type: GET_SKILL_BY_ID,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  // const getSkillById = (id) => {
  //   setLoading();
  //   axios
  //     .get(`${process.env.REACT_APP_HOST_NAME}/api/admin/skills/${id}`, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //         Authorization: `Bearer ${localStorage.getItem('token')}`,
  //       },
  //     })
  //     .then((res) => {
  //       console.log('getQuestions', res);
  //       dispatch({
  //         type: GET_SKILL_BY_ID,
  //         payload: res.data.data,
  //       });
  //     })
  //     .catch((err) => {
  //       alert(err.response.data.message);
  //     });
  // };
  const getQuestionById = (id) => {
    setLoading();
    axios
      .get(`${process.env.REACT_APP_HOST_NAME}/api/admin/questions/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        dispatch({
          type: GET_QUESTION_BY_ID,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  const getModelAnswers = (questionId) => {
    setLoading();
    axios
      .get(
        `${process.env.REACT_APP_HOST_NAME}/api/admin/questions/${questionId}/model_answers`,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((res) => {
        dispatch({
          type: GET_MODEL_ANSWERS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  const createModelAnswer = (skillObject, questionId) => {
    console.log('createModelAnswer: ', skillObject);
    axios
      .post(
        `${process.env.REACT_APP_HOST_NAME}/api/admin/questions/${questionId}/model_answers`,
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
        history.push(`/admin/questions/${questionId}/answers`);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  const deleteModelAnswer = (modelAnswerId, questionId) => {
    console.log('deleteModelAnswer: ', modelAnswerId);
    axios
      .delete(
        `${process.env.REACT_APP_HOST_NAME}/api/admin/model_answers/${modelAnswerId}`,

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
  const updateModelAnswer = (object, modelAnswerId, questionId) => {
    console.log('deleteModelAnswer: ', modelAnswerId);
    axios
      .put(
        `${process.env.REACT_APP_HOST_NAME}/api/admin/model_answers/${modelAnswerId}`,
        object,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((res) => {
        history.push(`/admin/questions/${questionId}/answers`);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  const getModelAnswerById = (id) => {
    setLoading();
    axios
      .get(`${process.env.REACT_APP_HOST_NAME}/api/admin/model_answers/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        dispatch({
          type: GET_MODEL_ANSWER_BY_ID,
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
        question: state.question,
        modelAnswers: state.modelAnswers,
        modelAnswer: state.modelAnswer,
        createSkill,
        deleteQuestion,
        deleteSkill,
        UpdateQuestion,
        updateSkill,
        createQuestion,
        getSkills,
        getQuestionsOfSkill,
        getSkillById,
        getQuestionById,
        getModelAnswers,
        createModelAnswer,
        deleteModelAnswer,
        getModelAnswerById,
        updateModelAnswer,
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminState;
