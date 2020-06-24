import React, { useReducer } from 'react';
import axios from 'axios';

import PositionsContext from './positionsContext';
import PositionsReducer from './positionsReducer';

import { SET_LAODING, GET_POSITIONS, GET_POSITION } from '../types';
import positionsContext from './positionsContext';

const PositionsState = (props) => {
  const initialState = {
    positions: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(PositionsReducer, initialState);
  //get all positions to show in home page "getPositions"
  const getPositions = () => {};
  //get positions by searching "searchPositions"

  return (
    <positionsContext.Provider
      value={{
        positions: state.positions,
        loading: state.loading,
      }}
    >
      {props.children}
    </positionsContext.Provider>
  );
};

export default PositionsState;
