import React, { useReducer } from 'react';

import PositionsReducer from './positionsReducer';

import {
  SET_LOADING,
  GET_POSITIONS,
  GET_POSITION,
  GET_POSITIONS_OF_RECRUITER,
} from '../types';
import positionsContext from './positionsContext';

const PositionsState = (props) => {
  const initialState = {
    positions: [],
    loading: false,
    recruiterPositions: [],
  };
  const [state, dispatch] = useReducer(PositionsReducer, initialState);

  //set laoding of data
  const setLoading = () => dispatch({ type: SET_LOADING });

  //get all positions to show in home page "getPositions"
  const getPositions = () => {
    setLoading();
    //axios get positions
    const res = [
      {
        id: 1,
        title: 'java',
        description: 'java software engineer',
        accepts_interviews_from_datetime: '1/6/2020',
        accepts_interviews_until: '1/7/2020',
        interview_duration: 2,
        status: 'pending',
      },
      {
        id: 1,
        title: 'python',
        description: 'java software engineer',
        accepts_interviews_from_datetime: '1/6/2020',
        accepts_interviews_until: '1/7/2020',
        interview_duration: 2,
        status: 'pending',
      },
      {
        id: 2,
        title: 'javascript',
        description: 'java software engineer',
        accepts_interviews_from_datetime: '1/6/2020',
        accepts_interviews_until: '1/7/2020',
        interview_duration: 2,
        status: 'pending',
      },
      {
        id: 3,
        title: 'ruby',
        description: 'java software engineer',
        accepts_interviews_from_datetime: '1/6/2020',
        accepts_interviews_until: '1/7/2020',
        interview_duration: 2,
        status: 'pending',
      },
      {
        id: 4,
        title: 'go',
        description: 'java software engineer',
        accepts_interviews_from_datetime: '1/6/2020',
        accepts_interviews_until: '1/7/2020',
        interview_duration: 2,
        status: 'pending',
      },
    ];

    dispatch({
      type: GET_POSITIONS,
      payload: res,
    });
  };

  //get positions by searching "getPositionsBySearch"
  const getPositionsBySearch = (text) => {
    setLoading();
    const res = [
      {
        id: 2,
        title: 'javascript',
        description: 'java software engineer',
        accepts_interviews_from_datetime: '1/6/2020',
        accepts_interviews_until: '1/7/2020',
        interview_duration: 2,
        status: 'pending',
      },
      {
        id: 3,
        title: 'ruby',
        description: 'java software engineer',
        accepts_interviews_from_datetime: '1/6/2020',
        accepts_interviews_until: '1/7/2020',
        interview_duration: 2,
        status: 'pending',
      },
    ];
    dispatch({
      type: GET_POSITION,
      payload: res,
    });
  };
  //add new position by recruiter
  const addNewPosition = (object) => {
    //axios add position
    console.log(object);
    return 1;
  };
  // get positions that certain recruiter posted
  const getPositionsByRecruiterName = () => {
    //axios get positions by recruiter name
    setLoading();
    const res = [
      {
        id: 2,
        title: 'node',
        description: 'mean software engineer',
        accepts_interviews_from_datetime: '1/6/2020',
        accepts_interviews_until: '1/7/2020',
        interview_duration: 2,
        status: 'pending',
      },
      {
        id: 3,
        title: 'ruby',
        description: 'ruby on rails software engineer',
        accepts_interviews_from_datetime: '1/6/2020',
        accepts_interviews_until: '1/7/2020',
        interview_duration: 2,
        status: 'pending',
      },
    ];
    dispatch({
      type: GET_POSITIONS_OF_RECRUITER,
      payload: res,
    });
  };
  //delete position by recruiter
  const deletePositionByid = () => {
    //axios delete by id
  };

  return (
    <positionsContext.Provider
      value={{
        positions: state.positions,
        loading: state.loading,
        recruiterPositions: state.recruiterPositions,
        getPositions,
        getPositionsBySearch,
        addNewPosition,
        getPositionsByRecruiterName,
      }}
    >
      {props.children}
    </positionsContext.Provider>
  );
};

export default PositionsState;
