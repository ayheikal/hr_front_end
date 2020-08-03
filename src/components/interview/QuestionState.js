import React, { Component } from 'react';

const QuestionState = ({ question }) => {
  const say = () => {
    alert('hello');
    window.responsiveVoice.speak(body);
  };
  const { body } = question;
  return (
    <div>
      <form>
        {console.log('question state')}
        <div className='form-group green-border w-50'>
          <label htmlFor='exampleFormControlTextarea5 '>
            Question{question.id}
          </label>
          <button type='button' onClick={say}>
            say
          </button>
          <textarea
            className='form-control'
            id='exampleFormControlTextarea5'
            rows='3'
            value={question.body}
            disabled
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default QuestionState;
