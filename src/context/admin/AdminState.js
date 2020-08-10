import adminContext from './adminContext';
import React from 'react';
import AdminContext from './adminContext';
import AdminReducer from './adminReduce';
import {
  CREATE_SKILL,
  UPDATE_SKILL,
  DELETE_SKILL,
  ADD_QUESTION,
  UPDATE_QUESTION,
  DELETE_QUESTION,
} from '../types';
export default AdminState = (props) => {
  const initialState = {
    skills: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(AdminReducer, initialState);
  const setLoading = () => dispatch({ type: SET_ADMIN_LOADING });

  //add skills
  const addSkill = (skillObject) => {};

  return (
    <AdminContext.Provider
      value={{
        skills: state.state,
        loading: state.loading,
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};
