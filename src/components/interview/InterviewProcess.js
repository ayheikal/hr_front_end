import React, { Component } from 'react'
import Question from './Question';
import Answer from './Answer';
import EndedInterview from './EndedInterview'
export default class InterviewProcess extends Component {
  state={
    question:[
      {id:1,body:'what is ur name'},
      {id:2,body:'what is ur last name'},
      {id:3,body:'what is ur age'},


    ],
    currentQuestion:0,

  }
  componentDidMount(){
    //axios.get(questions)
    const {userId,jobId,interviewId}=this.props.match.params;
    console.log(userId)
  }
  submitAnswer=(answer)=>{
    alert(answer.body+'=>'+answer.questionId)
    if(this.state.currentQuestion<(this.state.question).length){
      this.setState({ currentQuestion: this.state.currentQuestion + 1 })
    }

  }

  skipAnswer=()=>{
    if(this.state.currentQuestion<(this.state.question).length){
      this.setState({ currentQuestion: this.state.currentQuestion + 1 })
    }
  }
  render () {
    if(this.state.currentQuestion<(this.state.question).length){
      return(
        <div>
          <Question question={this.state.question[this.state.currentQuestion]}/>
          <Answer
            submitAnswer={this.submitAnswer}
           questionId={this.state.question[this.state.currentQuestion].id}
           skipAnswer={this.skipAnswer}/>
      </div>)
    }
  else{
    return(
      <EndedInterview/>
    )
  }

  }
}
