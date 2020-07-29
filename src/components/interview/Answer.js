import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { startReco, endReco } from './NewSTT';
import Speech from './scriptSTT';
import InterviewContext from '../../context/interview/interviewContext';
const Answer = (props) => {
  const [answer, setAnswer] = useState({});
  const [text, setText] = useState('');
  const [stt, setStt] = useState('');
  const interviewContext = useContext(InterviewContext);

  const handleSubmit = (e) => {
    var value = document.getElementById('answer').innerHTML;
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
    e.preventDefault();
    props.submitAnswer(answer);
    interviewContext.deleteSpeechToText(' ');
  };

  const handleSkip = (e) => {
    e.preventDefault();
    props.skipAnswer();
  };

  const handleEnd = (e) => {
    props.submitAnswer(answer);
  };

  return (
    <div>
      <form autoComplete='off' className={'w-50'}>
        <div className='form-group green-border-focus '>
          <label htmlFor='exampleFormControlTextarea5'>Answer</label>

          <div
            contenteditable='true'
            id='answer'
            style={{ border: '1px solid', display: 'block', overflow: 'auto' }}
          >
            {interviewContext.speechToText}
          </div>

          <Speech></Speech>
        </div>
        <div className='m-10'>
          <button className='btn btn-primary' onClick={handleSubmit}>
            submit
          </button>

          {' | '}

          <button className='btn btn-secondary' onClick={handleSkip}>
            Skip
          </button>
          {' | '}
          <Link to='/home' className='btn btn-danger' onClick={handleEnd}>
            End
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Answer;
