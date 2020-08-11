import React from 'react';

const Question = ({question,mounted}) => {
  // 0 not spoke , 1 spoken
 
  

  const say = (body) => {
    var synth = window.speechSynthesis;
    synth.speak(new SpeechSynthesisUtterance(body));
   
  };
  const{body,id}=question;
  return (
    
    <>
      <form>
        <div className="row questions">
          <div className="col-md-11 text-center">
            <textarea
              className='form-control'
              id='exampleFormControlTextarea5'
              cols="1"
              rows='3'
              value={body}
              disabled
            ></textarea>

          </div>
          <div className="col-md-1 listen">
            <i className="fa fa-deaf"  onClick={(e)=>{say(body)}}></i>
          </div>
          
        </div>
      </form>
    </>
  );
};

export default Question;
