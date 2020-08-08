import React, { useContext } from 'react';
import recruiterReducer from './recruiterReducer';

const RecruiterState = (props) => {
  const initialState = {};

  const [state, dispatch] = useReducer(recruiterReducer, initialState);

  return (
    <recruiterContext.Provider value={{}}>
      {props.children}
    </recruiterContext.Provider>
  );
};

export default RecruiterState;
