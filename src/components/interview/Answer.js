import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Answer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      answer:{userId:'1',jobId:'1',interviewId:1,questionId:'',body:''}
    }
  }

  handleAnswer=(event)=>{
  //this.setState({...this.state.answer, body:event.target.value});
  let answer = Object.assign({}, this.state);
  answer.answer.body = event.target.value;
  answer.answer.questionId=this.props.questionId;
  this.setState(answer);

  }
  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.submitAnswer(this.state.answer)

  }

handleSkip=(e)=>{
  e.preventDefault();
  this.props.skipAnswer();
}

handleEnd=(e)=>{
  this.props.submitAnswer(this.state.answer)
}
  render () {
    return (
      <div>
        <form autoComplete="off" className={'w-50'}>
            <div className="form-group green-border-focus">
              <label htmlFor="exampleFormControlTextarea5">Answer</label>
              <textarea className="form-control" id="exampleFormControlTextarea5" rows="3"
                onChange={this.handleAnswer} ></textarea>
            </div>
            <div className='m-10'>
              <Link className="btn btn-primary" onClick={this.handleSubmit}>submit</Link>{' | '}
              <Link className="btn btn-secondary"onClick={this.handleSkip}>Skip</Link>{' | '}
              <Link to='/home' className="btn btn-danger" onClick={this.handleEnd}>End</Link>
            </div>
        </form>
      </div>
    )
  }
}
