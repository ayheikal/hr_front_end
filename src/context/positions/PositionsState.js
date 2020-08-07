import React, { useReducer } from 'react';
import axios from 'axios';
import PositionsReducer from './positionsReducer';

import {
  SET_LOADING,
  GET_POSITIONS,
  GET_POSITION,
  GET_POSITIONS_OF_RECRUITER,
  SET_ERROR,
} from '../types';
import positionsContext from './positionsContext';

const PositionsState = (props) => {
  const initialState = {
    positions: [],
    loading: false,
    recruiterPositions: [],
    currentPage: 0,
    numberOfPages: 0,
    error: '',
  };
  const [state, dispatch] = useReducer(PositionsReducer, initialState);

  //set laoding of data
  const setLoading = () => dispatch({ type: SET_LOADING });

  const setError = (errorType) =>
    dispatch({ type: SET_ERROR, error: errorType });

  //get all positions to show in home page "getPositions"
  const getPositions = () => {
    console.log("ddddd" , process.env.REACT_APP_HOST_NAME)
    setLoading();
    let res = {
      data:{
        data:[
          {
            title: "Rebeca Wolff",
            desc: "Magni animi ducimus molestiae tempore aperiam vitae exercitationem. Cum quisquam hic dolores consectetur enim odit voluptatem. Optio placeat officiis maxime accusantium et laudantium. Qui quisquam labore alias distinctio sequi eius sequi.",
            accept_interviews_from: "2010-07-29 13:56:32.0",
            accept_interviews_until: "1971-09-01 00:32:49.0",
            interview_duration: 5114,
            recruiter_id: 1,
            updated_at: "2020-08-07 14:27:07",
            created_at: "2020-08-07 14:27:07",
            id: 1,
          },
          {
            title: "Demo Wolff",
            desc: "Magni animi ducimus molestiae tempore aperiam vitae exercitationem. Cum quisquam hic dolores consectetur enim odit voluptatem. Optio placeat officiis maxime accusantium et laudantium. Qui quisquam labore alias distinctio sequi eius sequi.",
            accept_interviews_from: "2010-07-29 13:56:32.0",
            accept_interviews_until: "1971-09-01 00:32:49.0",
            interview_duration: 5114,
            recruiter_id: 1,
            updated_at: "2020-08-07 14:27:07",
            created_at: "2020-08-07 14:27:07",
            id: 1,
          }
       
        ],
        meta:{
          current_page:1,
          total:0,
          per_page:15
        }
      }
    }
    // axios
      // .get(`${process.env.REACT_APP_HOST_NAME}/api/availableJobs`)
      // .then((res) => {
        dispatch({
          type: GET_POSITIONS,
          payload: res.data.data,
          currentPage: res.data.meta.current_page,
          numberOfPages: Math.ceil(
            res.data.meta.total / res.data.meta.per_page
        )})
        // });
      // })
      // .catch((error) => {
      //   setError(error);
      //   console.log('error: ', error);
      // });

    // getPositionsBypage(0,10);
  }
  //const getPositionsBypage
  const getPositionsBypage = (pageNumber, numberOfPages) => {
    setLoading();

    axios
      .get(
        `${process.env.REACT_APP_HOST_NAME}/api/availableJobs?page=${pageNumber}`
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
    setLoading();
    axios
      .get(`${process.env.REACT_APP_HOST_NAME}/api/availableJobs?title=${text}`)
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
  //add new position by recruiter
  const addNewPosition = (object) => {
    //axios add position
    console.log(object);
    return 1;
  };
  // get positions that certain recruiter posted
  const getPositionsByRecruiterName = () => {
    //axios get positions by recruiter name
    //https://3a74a200ee9a.ngrok.io/
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

  const handleApply = (jobId, applicantId) => {
    // create interview 
    axios.post(`${process.env.REACT_APP_HOST_NAME}/api/applicant/interview`,
    {"job_id": jobId,"applicant_id": applicantId},
    {
      'headers': {'Content-Type':'application/json', 'Accept':'application/json'}
    }).then( res => {
      let job_id = res.data.data.job_id
      let interview_id = res.data.data.id
      console.log('created interview', job_id, interview_id);
    }).catch( err => {
      console.log(err)
    })
    // redirect to the interview process
  }


  // //delete position by recruiter
  // const deletePositionByid = () => {
  //   //axios delete by id
  // };

  return (
    <positionsContext.Provider
      value={{
        positions: state.positions,
        loading: state.loading,
        recruiterPositions: state.recruiterPositions,
        numberOfPages: state.numberOfPages,
        currentPage: state.currentPage,
        error: state.error,
        getPositions,
        getPositionsBySearch,
        addNewPosition,
        getPositionsByRecruiterName,
        getPositionsBypage,
        setError,
        handleApply
      }}
    >
      {props.children}
    </positionsContext.Provider>
  );
};

export default PositionsState;
