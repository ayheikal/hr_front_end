import React, { useContext, useLayoutEffect } from 'react';
import Answer from './Answer';
import EndedInterview from './EndedInterview';
import InterviewContext from '../../context/interview/interviewContext';
import QuestionState from './QuestionState';

const InterviewProcess = (props) => {
  const interviewContext = useContext(InterviewContext);

  useLayoutEffect(() => {
    //axios.get(questions)
    /*     const { userId, jobId, interviewId } = props.match.params;
     */ /* console.log(userId); */
    interviewContext.getQuestions();
    console.log('use effect call');
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
      alert('skipt');
      interviewContext.deleteSpeechToText();
    }
  };

  if (interviewContext.currentQuestion < interviewContext.questions.length) {
    return (
      <div className='center'>
        <QuestionState
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
