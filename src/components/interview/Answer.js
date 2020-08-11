import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
// import { startReco, endReco } from './NewSTT';
import Speech from './scriptSTT';
import InterviewContext from '../../context/interview/interviewContext';
const Answer = (props) => {
  const [answer, setAnswer] = useState({});

  const interviewContext = useContext(InterviewContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    var value = document.getElementById('answer').innerHTML;
    if (value == null) {
      value = ' null';
    }
    var userid = 1;
    var jobid = 1;
    var interviewid = 1;
    var answer = {
      userId: userid,
      jobId: jobid,
      interviewId: interviewid,
      body: value,
      questionId: props.questionId,
    };
    setAnswer(answer);
    props.submitAnswer(answer);
    interviewContext.deleteSpeechToText(' ');
  };

  const handleSkip = (e) => {
    e.preventDefault();
    props.skipAnswer();
  };

  const handleEnd = (e) => {
    props.handleEndInterview();
  };

  return (
    

        <form autoComplete='off' >
    
          {/* <div className='form-group green-border-focus '> */}

          <div className="row answer">
            <div className="col-md-11">
              <div
                className=""
                contentEditable='true'
                id='answer'
                style={{ border: '1px solid', display: 'block', overflow: 'auto' }}
              >
                {interviewContext.speechToText}
              </div>
              </div>
              <div className="col-md-1">
                <Speech></Speech>
              </div>

          </div>

          <div className="row action-buttons">
          <div className="col-md-4 text-left">
              <button className='btn btn-secondary' onClick={handleSkip}>
                Skip
              </button>
            </div>
            <div className="col-md-7 text-right">
              <button className='btn btn-primary' onClick={handleSubmit}>
                submit
              </button>
            </div>
            
        </div>

        <div className="row">
          <div className="col-md-12">
              <Link to='/home' className='btn btn-danger exit-interview' onClick={handleEnd}>
                END THE INTERVIEW
              </Link>
          </div>
        </div>
        </form>
  );
};

export default Answer;
