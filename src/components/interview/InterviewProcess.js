import React, { useContext, useEffect } from 'react';
import Question from './Question';
import Answer from './Answer';
import EndedInterview from './EndedInterview';
import InterviewContext from '../../context/interview/interviewContext';
import Timer from './Timer'
import interviewerImage from './../../images/interviewer.jpg'
const InterviewProcess = (props) => {
  const interviewContext = useContext(InterviewContext);

  useEffect(() => {
    //axios.get(questions)
    /*     const { userId, jobId, interviewId } = props.match.params;
     */ /* console.log(userId); */
    console.log('useLayoutEffect');
    console.log('params', props.match.params.interviewId);
    interviewContext.getQuestions(props.match.params.interviewId);
    //eslint-disable-next-line
  }, []);
  const submitAnswer = async (answer) => {
    alert(answer.body + '=>' + answer.questionId);

    const interviewId = props.match.params.interviewId;
    interviewContext.saveAnswer(
      { body: answer.body },
      answer.questionId,
      interviewId
    );

    if (interviewContext.currentQuestion < interviewContext.questions.length) {
      /* this.setState({ currentQuestion: this.state.currentQuestion + 1 }) */
      await interviewContext.incrementQuestionCounter();
      interviewContext.deleteSpeechToText();
    }
    console.log('submit answer->current', interviewContext.currentQuestion);
    if (
      interviewContext.currentQuestion + 1 ===
      interviewContext.questions.length
    ) {
      console.log('inside submit answer end interview');
      interviewContext.endInterview(interviewId);
    }
  };

  const skipAnswer = async () => {
    console.log('skip answer->current', interviewContext.currentQuestion);
    if (interviewContext.currentQuestion < interviewContext.questions.length) {
      await interviewContext.incrementQuestionCounter();
      interviewContext.deleteSpeechToText();
    }
    if (
      interviewContext.currentQuestion + 1 ===
      interviewContext.questions.length
    ) {
      interviewContext.endInterview(props.match.params.interviewId);
    }
  };
  const handleEndInterview = () => {
    interviewContext.endInterview(props.match.params.interviewId);
  };
  console.log('interview counter: ', interviewContext.currentQuestion);
  console.log('interview length: ', interviewContext.questions.length);
  if (interviewContext.currentQuestion < interviewContext.questions.length) {
    return (

      <div className="inerview-room">

        <div className='card'>
          <div className="card-header">
            INTERVIEW ROOM <span>.</span>
            <span className='timer'>
              {/* console.log() */}
              {/* <Timer secondes={InterviewContext.} /> */}
            </span>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Question
                question={
                  interviewContext.questions[interviewContext.currentQuestion]
                }
                mounted={true}
              />
                <Answer
                  submitAnswer={submitAnswer}
                  questionId={
                    interviewContext.questions[interviewContext.currentQuestion].id
                  }
                  skipAnswer={skipAnswer}
                  handleEndInterview={handleEndInterview}
                />

            </div>
            <div className="col-md-6">
              <img src={interviewerImage} />
            </div>
          </div>
              
          
        </div>
      </div>

    );
  } else {
    return <EndedInterview />;
  }
};

export default InterviewProcess;
