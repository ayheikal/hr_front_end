import React from 'react';

const Question = ({question,mounted}) => {
  // 0 not spoke , 1 spoken
 
  

  const say = (body) => {
    var synth = window.speechSynthesis;
    synth.speak(new SpeechSynthesisUtterance(body));
   
  };
  const{body,id}=question;
  return (
    
    <div>
      <form>
        <div className='form-group green-border w-50'>
          <label htmlFor='exampleFormControlTextarea5 '>
            Question{id}
          </label>
          <button type='button' onClick={(e)=>{say(body)}}>say </button>
          <textarea
            className='form-control'
            id='exampleFormControlTextarea5'
            rows='3'
            value={body}
            disabled
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default Question;
