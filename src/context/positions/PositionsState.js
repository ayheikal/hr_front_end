import React, { useReducer} from 'react';
import axios from 'axios';
import PositionsReducer from './positionsReducer';
import { useHistory } from 'react-router-dom';
import Moment from 'moment';

import {
  SET_LOADING,
  GET_POSITIONS,
  GET_POSITION,
  GET_POSITIONS_OF_RECRUITER,
  SET_ERROR,
  GET_POSITION_BY_ID,
} from '../types';
import positionsContext from './positionsContext';
import interviewContext from './../../context/interview/interviewContext';

const PositionsState = (props) => {
  let history = useHistory();
  const initialState = {
    positions: [],
    position: {},
    loading: false,
    recruiterPositions: [],
    currentPage: 0,
    numberOfPages: 0,
    error: '',
    questions: [],
  };
  const [state, dispatch] = useReducer(PositionsReducer, initialState);

  //set laoding of data
  const setLoading = () => dispatch({ type: SET_LOADING });

  const setError = (errorType) =>
    dispatch({ type: SET_ERROR, error: errorType });

  //get all positions to show in home page "getPositions"
  const getPositions = () => {
    const isAuthed = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const headers = isAuthed
      ? {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      : {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        };

    setLoading();
    let link = null;
    if (isAuthed && role === 'applicant') {
      link = 'applicant/jobs';
    } else if (isAuthed && role === 'recruiter') {
      link = 'recruiter/jobs';
    } else if (isAuthed && role === 'admin') {
      link = 'admin/jobs';
    } else {
      link = 'guest/jobs';
    }

    axios
      .get(`${process.env.REACT_APP_HOST_NAME}/api/${link}`, {
        headers: headers,
      })
      .then((res) => {
        console.log('res: ', res.data.data);
        dispatch({
          type: GET_POSITIONS,
          payload: res.data.data,
          currentPage: res.data.meta.current_page,
          numberOfPages: Math.ceil(
            res.data.meta.total / res.data.meta.per_page
          ),
        });
      })
      .catch((error) => {
        setError(error);
        console.log('error: ', error);
      });

    //getPositionsBypage(0, 10);
  };
  //const getPositionsBypage
  const getPositionsBypage = (pageNumber, numberOfPages) => {
    const isAuthed = localStorage.getItem('token');
    const headers = isAuthed
      ? {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      : {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        };
    setLoading();
    const link = isAuthed ? 'applicant/jobs' : 'guest/jobs';
    axios
      .get(
        `${process.env.REACT_APP_HOST_NAME}/api/${link}?page=${pageNumber}`,
        { headers: headers }
      )
      .then((res) => {
        dispatch({
          type: GET_POSITIONS,
          payload: res.data.data,
          currentPage: res.data.meta.current_page,
          numberOfPages: Math.ceil(
            res.data.meta.total / res.data.meta.per_page
          ),
        });
      })
      .catch((error) => {
        setError(error);
      });
  };

  //get positions by searching "getPositionsBySearch"
  const getPositionsBySearch = (text) => {
    const isAuthed = localStorage.getItem('token');
    const headers = isAuthed
      ? {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      : {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        };
    setLoading();
    const link = isAuthed ? 'applicant/jobs' : 'guest/jobs';
    axios
      .get(`${process.env.REACT_APP_HOST_NAME}/api/${link}?title=${text}`, {
        headers: headers,
      })
      .then((res) => {
        dispatch({
          type: GET_POSITION,
          payload: res.data.data,
        });
      })
      .catch((error) => {
        setError(error);
      });
  };
  //convert time to database timedate formate
  const convertToTime = (object) => {
    return Moment(object, 'YYYY-MM-DDTHH:mm:ss').format('YYYY-MM-DD HH:mm:ss');
  };
  //add new position by recruiter
  const addNewPosition = async (object) => {
    //axios add position
    object.accept_interviews_from = convertToTime(
      object.accept_interviews_from
    );
    object.accept_interviews_until = convertToTime(
      object.accept_interviews_until
    );

    await axios
      .post(`${process.env.REACT_APP_HOST_NAME}/api/recruiter/jobs`, object, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        history.push('/recruiter/positions');
      })
      .catch((err) => {
        // console.log(err.response);
        alert(err.response.data.message);
      });
  };
  //update position by recruiter
  const updatePosition = (object, jobId) => {
    object.accept_interviews_from = convertToTime(
      object.accept_interviews_from
    );
    object.accept_interviews_until = convertToTime(
      object.accept_interviews_until
    );

    axios
      .put(
        `${process.env.REACT_APP_HOST_NAME}/api/recruiter/jobs/${jobId}`,
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
        history.push('/recruiter/positions');
      })
      .catch((err) => console.log(err.response));
  };
  // get positions that certain recruiter posted
  const getPositionsByRecruiterName = () => {
    setLoading();
    axios
      .get(
        `${process.env.REACT_APP_HOST_NAME}/api/recruiter/jobs`,

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
          type: GET_POSITIONS_OF_RECRUITER,
          payload: res.data.data,
        });
      })
      .catch((err) => console.log(err.response));
  };

  
  const getPositionById = (positionId) => {
    console.log('hello i am here');
    axios
      .get(
        `${process.env.REACT_APP_HOST_NAME}/api/recruiter/jobs/${positionId}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((res) => {
        console.log('res:', res);
        dispatch({
          type: GET_POSITION_BY_ID,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  // //delete position by recruiter

  const deletePositionByRecruiter = (jobId) => {
    console.log('positionId', jobId, localStorage.getItem('token'));
    axios
      .delete(
        `${process.env.REACT_APP_HOST_NAME}/api/recruiter/jobs/${jobId}`,
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
      .catch((err) => alert(err.response.data.message));
  };
  // const deletePositionByid = (positionId) => {
  //   console.log('positionId', positionId, localStorage.getItem('token'));
  //   // axios
  //   //   .delete(
  //     `${process.env.REACT_APP_HOST_NAME}/api/recruiter/jobs/${positionId}`,
  //     null,
  //     {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //         Authorization: `Bearer ${localStorage.getItem('token')}`,
  //       },
  //     }
  //   )
  //   .then((res) => {
  //     alert('Deleted Successfully');
  //   })
  //   .catch((err) => {
  //     alert(err.response.data.message);
  //   });
  // };

  // //   //axios delete by id
  // // };
  const setQuestions = (qs) => {
    state.questions = qs;
  };

  return (
    <positionsContext.Provider
      value={{
        positions: state.positions,
        loading: state.loading,
        recruiterPositions: state.recruiterPositions,
        numberOfPages: state.numberOfPages,
        currentPage: state.currentPage,
        error: state.error,
        position: state.position,
        questions: state.questions,
        getPositions,
        getPositionsBySearch,
        addNewPosition,
        getPositionsByRecruiterName,
        getPositionsBypage,
        setError,
        getPositionById,
        deletePositionByRecruiter,
        updatePosition,
        setQuestions,
      }}
    >
      {props.children}
    </positionsContext.Provider>
  );
};

export default PositionsState;
