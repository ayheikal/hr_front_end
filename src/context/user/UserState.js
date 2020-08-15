import React, { useReducer } from 'react';
import UserReducer from './userReducer';
import userContext from './userContext';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {
  GET_ALL_USERS,
  SET_USER_LOADING,
  GET_USER_BY_NAME_AND_TITLE,
  GET_USER,
  SET_APPLICANT_PROCESSING_INTERVIEW,
} from '../types';

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

  const userRegister = async (user) => {
    await axios
      .post(`${process.env.REACT_APP_HOST_NAME}/api/register`, user, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then((res) => {
        console.log(res);
        history.push('/signin');
      })
      .catch((err) => {
        console.log(err.response);
        alert(err.response.data.message);
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
        localStorage.setItem('name', res.data.data.user.name);
        // localStorage.setItem('role', 'admin')
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
  const getUserInfo = () => {
    axios
      .get(`${process.env.REACT_APP_HOST_NAME}/api/applicant`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        dispatch({
          type: GET_USER,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log('err', err.response);
      });
  };

  //get job that a user applied and their status
  const getInterviewDescriptionOfApplicant = (userId) => {
    setLoading();
    //axios to get job
    axios
      .get(`${process.env.REACT_APP_HOST_NAME}/api/applicant/interviews/`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((result) => {
        // console.log(result);
        // result.data.data.map((interview) => {
        //   console.log('interview feedback: ', interview.feedback);
        //   if (interview.feedback !== null) {
        //     interview.feedback.map((skill) => {
        //       console.log('skill', skill);
        //     });
        //   }
        // });

        // console.log(
        //   'result bgd: ',
        //   result.data.data.feedback['Skill #1']['links'][0]
        // );
        console.log('hey', result);
        console.log();
        dispatch({
          type: SET_APPLICANT_PROCESSING_INTERVIEW,
          payload: result.data.data,
        });
      })
      .catch((err) => console.log(err.response));
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
