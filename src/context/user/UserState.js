import React, { useReducer, useContext } from 'react';
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
} from '../types';

const UserState = (props) => {
  let history = useHistory();
  const initialState = {
    users: [],
    user: null,
    loading: false,
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
        history.push('/signin');
      })
      .catch((err) => {
        console.log(err);
      });
  };

    const signIn=(userObject)=>{
        axios.post(`${process.env.REACT_APP_HOST_NAME}/api/login`,userObject,{
            header: {'Content-Type': 'application/json', 'Accept': 'application/json'}
        })
        .then(res=>{
            console.log('logged', res)
            localStorage.setItem('token',res.data.data.access_token )
            localStorage.setItem('userId',res.data.data.user.id )
            localStorage.setItem('role',res.data.data.user.role)
            history.push('/')

        })
       .catch( err=>{
            console.log("err",err.response)
        })
    }


const getToken = () =>{
     return localStorage.getItem('token');

}

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
    const res = [
      {
        id: 1,
        name: 'heikal',
        email: 'heikal@gmail.com',
        bio: 'boy with bull shit',
        hireable: false,
      },
    ];

    dispatch({
      type: GET_USER,
      payload: res,
    });
  };

  //get job that a user applied and their status
  const getStatusOfJobs = (id) => {
    //axios to get job
  };

  //get all users
  const getAllUsers = () => {
    //axios get all users
    setLoading();
    axios
      .get(`${process.env.REACT_APP_HOST_NAME}/api/users`)
      .then((res) => {
        dispatch({
          type: GET_ALL_USERS,
          payload: res.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
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
const logOut=()=>{
  console.log('logOut: ')
  localStorage.clear();
  window.location.href = '/';
}
  return (
    <userContext.Provider
      value={{
        name: state.name,
        users: state.users,
        user: state.user,
        loading: state.loading,
        userRegister,
        signIn,
        getAllUsers,
        getUserInfo,
        isAuthenticated,
        logOut,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default UserState;
