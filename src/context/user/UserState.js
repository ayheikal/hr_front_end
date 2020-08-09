import React, { useReducer } from 'react';
import UserReducer from './userReducer';
import userContext from './userContext';
import axios from 'axios';
import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom';
import {
  GET_ALL_USERS,
  SET_USER_LOADING,
  GET_USER_BY_NAME_AND_TITLE,
  LOGIN,
  GET_USER,
  SET_APPLICANT_PROCESSING_INTERVIEW,
} from '../types';
import Axios from 'axios';

const UserState = (props) => {
  let history = useHistory();
  const initialState = {
    users: [],
    user: {},
    loading: false,
    userAppliedJobs: [],
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);
  const setLoading = () => dispatch({ type: SET_USER_LOADING });

  const userRegister = (user) => {
    axios
      .post(`${process.env.REACT_APP_HOST_NAME}/api/register`, user, {
        header: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then((res) => {
        localStorage.removeItem('alert');
        history.push('/signin');
      })
      .catch((err) => {
        localStorage.setItem('alert', err.response.data.message);
      });
  };

  const signIn = (userObject) => {
    axios
      .post(`${process.env.REACT_APP_HOST_NAME}/api/login`, userObject, {
        header: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then((res) => {
        console.log('logged', res);
        localStorage.setItem('token', res.data.data.access_token);
        localStorage.setItem('userId', res.data.data.user.id);
        localStorage.setItem('role', res.data.data.user.role);
        history.push('/');
      })
      .catch((err) => {
        console.log('err', err.response);
      });
  };

  const getToken = () => {
    return localStorage.getItem('token');
  };

  const isAuthenticated = () => {
    let token = getToken();
    return token ? true : false;
  };

  // get user info
  const getUserInfo = (id) => {
    console.log('get user info: ', id);
    setLoading();
    //axios get info
    // get name and email,
    const res = {
      id: 1,
      name: 'heikal',
      email: 'heikal@gmail.com',
      joinedAt: 'february- 2017',
    };

    dispatch({
      type: GET_USER,
      payload: res,
    });
  };

  //get job that a user applied and their status
  const getInterviewDescriptionOfApplicant = (userId) => {
    setLoading();
    //axios to get job
    axios
      .get(`${process.env.REACT_APP_HOST_NAME}/api/applicant/interviews`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        // console.log('getInterviewDescriptionOfApplicant: ', res);
        const interviews = res.data.data;
        console.log('inter :', interviews);
        dispatch({
          type: SET_APPLICANT_PROCESSING_INTERVIEW,
          payload: res.data.data,
        });
      })
      .catch((err) => console.log(err.response));
    const res = [
      {
        id: 1,
        title: 'java',
        desc: 'ldksjdj',
        status: '----',
        feedback: '---',
        joinedAt: '---',
      },
      {
        id: 2,
        title: 'javascript',
        desc: 'java my love',
        status: 'reviewing',
        feedback: 'nothing',
        joinedAt: '2020-08-07 00:14:19',
      },
      {
        id: 3,
        title: 'football player',
        desc: 'java my love 3m elnas',
        status: 'reviewing',
        feedback: 'nothing',
        joinedAt: '2020-08-07 00:14:19',
      },
    ];
  };

  //get all users
  const getAllUsers = () => {
    //axios get all users
    // setLoading();
    // axios
    //   .get(`${process.env.REACT_APP_HOST_NAME}/api/users`)
    //   .then((res) => {
    //     dispatch({
    //       type: GET_ALL_USERS,
    //       payload: res.data.data,
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    setLoading();
    const res = [
      {
        id: 1,
        email: 'email.com',
        name: 'ayman heikal',
        phone: '01120280097',
      },
      {
        id: 2,
        email: 'email.com',
        name: 'heikal heikal',
        phone: '01120280097',
      },
    ];

    dispatch({
      type: GET_ALL_USERS,
      payload: res,
    });
  };
  // const search for a user by his title or name
  const getUserByNameAndTitle = (searchAddress) => {
    //axios
    const res = [];
    dispatch({
      type: GET_USER_BY_NAME_AND_TITLE,
      payload: res,
    });
  };
  // logout out
  const logOut = () => {
    console.log('logOut: ');
    localStorage.clear();
    window.location.href = '/';
  };
  return (
    <userContext.Provider
      value={{
        name: state.name,
        users: state.users,
        user: state.user,
        loading: state.loading,
        userAppliedJobs: state.userAppliedJobs,
        userRegister,
        signIn,
        getAllUsers,
        getUserInfo,
        isAuthenticated,
        logOut,
        getInterviewDescriptionOfApplicant,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default UserState;
