import React, { useReducer } from 'react';
import AlertReducer from './alertReducer';
import AlertContext from './alertContext';
import { SET_ALERT } from '../types';

const AlertState = (props) => {
  const initialState = {
    alert: null,
  };
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //set alert
  const setAlert = (msg, type) => {
    /* this.setState({ alert: { msg, type } }); */
    dispatch({
      type: SET_ALERT,
      alert: { msg, type },
    });
    setTimeout(() => {
      dispatch({
        type: SET_ALERT,
        alert: null,
      });
    }, 5000);
  };
  return (
    <AlertContext.Provider
      value={{
        setAlert,
        alert: state.alert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
