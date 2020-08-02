import React, { useContext, useEffect } from 'react';
import Question from './Question';
import Answer from './Answer';
import EndedInterview from './EndedInterview';
import InterviewContext from '../../context/interview/interviewContext';
const InterviewProcess = (props) => {
  const interviewContext = useContext(InterviewContext);

  useEffect(() => {
    //axios.get(questions)
    /*     const { userId, jobId, interviewId } = props.match.params;
     */ /* console.log(userId); */
    interviewContext.getQuestions();
    //eslint-disable-next-line
  }, []);
  const submitAnswer = (answer) => {
    alert(answer.body + '=>' + answer.questionId);
    interviewContext.saveAnswer(answer);
    if (interviewContext.currentQuestion < interviewContext.questions.length) {
      /* this.setState({ currentQuestion: this.state.currentQuestion + 1 }) */
      interviewContext.incrementQuestionCounter();
      interviewContext.deleteSpeechToText();
    }
  };

  const skipAnswer = () => {
    if (interviewContext.currentQuestion < interviewContext.questions.length) {
      interviewContext.incrementQuestionCounter();
      interviewContext.deleteSpeechTOText();
    }
  };
  console.log('interview counter: ', interviewContext.currentQuestion);
  console.log('interview length: ', interviewContext.questions.length);
  if (interviewContext.currentQuestion < interviewContext.questions.length) {
    return (
      <div className='center'>
        <Question
          question={
            interviewContext.questions[interviewContext.currentQuestion]
          }
        />
        <Answer
          submitAnswer={submitAnswer}
          questionId={
            interviewContext.questions[interviewContext.currentQuestion].id
          }
          skipAnswer={skipAnswer}
        />
      </div>
    );
  } else {
    return <EndedInterview />;
  }
};

export default InterviewProcess;
