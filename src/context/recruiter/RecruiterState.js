import React, { useContext ,useReducer} from 'react';
import RecruiterReducer from './recruiterReducer';
import recruiterContext from './recruiterContext'
import axios from 'axios';
import{
  GET_JOB_INTERVIEWS,
  GET_REPORT,
}from '../types'
const RecruiterState = (props) => {
  const initialState = {
    jobInterviews:[],
    applicant:[],
    jobInfo:[],
    report:[],
    quesanswer:[],
    loading:false,

  };

  const [state, dispatch] = useReducer(RecruiterReducer, initialState);

  const getJobInterviews=(jobId)=>{
    axios
    .get(`${process.env.REACT_APP_HOST_NAME}/api/recruiter/jobs/${jobId}/interviews`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((res) => {
      dispatch({
        type: GET_JOB_INTERVIEWS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log('err', err.response);
    });

  }

  const getReport=async (interviewId)=>{
    await axios
    .get(`${process.env.REACT_APP_HOST_NAME}/api/recruiter/interviews/${interviewId}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((res) => {
      dispatch({
        type: GET_REPORT,
        applicant: res.data.data.applicant,
        jobInfo:res.data.data.job,
        report:res.data.data,
        quesanswer:res.data.data.report,
      });
    })
    .catch((err) => {
      console.log('err', err.response);
    });

  }
  const updateScore=async (answerId, newScore)=>{
    await axios
    .put(`${process.env.REACT_APP_HOST_NAME}/api/recruiter/answers/${answerId}/score`,{'score' :newScore}, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((res) => {
      console.log('updateScore: ',res)
      window.location.reload()
      // dispatch({
      //   type: GET_REPORT,
      //   applicant: res.data.data.applicant,
      //   jobInfo:res.data.data.job,
      //   report:res.data.data,
      //   quesanswer:res.data.data.report,
      // });
    })
    .catch((err) => {
      console.log('err', err.response);
    });
    
  }

  const updateStatus =async (interviewId, newStatus)=>{
    console.log('new ',newStatus)
    await axios
    .put(`${process.env.REACT_APP_HOST_NAME}/api/recruiter/interviews/${interviewId}/status`,{'status' :'not selected'}, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((res) => {
      console.log('updateStatus: ',res)
      window.location.reload()
      // dispatch({
      //   type: GET_REPORT,
      //   applicant: res.data.data.applicant,
      //   jobInfo:res.data.data.job,
      //   report:res.data.data,
      //   quesanswer:res.data.data.report,
      // });
    })
    .catch((err) => {
      console.log('err', err.response);
    });
    
  }

  return (
    <recruiterContext.Provider value={{
      jobInterviews:state.jobInterviews,
      applicant:state.applicant,
      jobInfo:state.jobInfo,
      report:state.report,
      quesanswer:state.quesanswer,
      getJobInterviews,
      getReport,
      updateScore,
      updateStatus


    }}>
      {props.children}
    </recruiterContext.Provider>
  );
};

export default RecruiterState;
