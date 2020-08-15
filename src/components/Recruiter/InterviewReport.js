import React, { useContext, useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom'
import { useForm } from 'react-hook-form';
import AdminContext from '../../context/admin/adminContext';
import RecruiterContext from '../../context/recruiter/recruiterContext'
const InterviewReport = (props) => {
  const history = useHistory()
  const { register, handleSubmit } = useForm();
  const recruiterContext =useContext(RecruiterContext)
  const onSubmit = (data) => {
 
  };

  useEffect(() => {
    if (!localStorage.getItem('token') || localStorage.getItem('role') !== 'recruiter'){
      history.push('/signin')
    }
    recruiterContext.getReport(props.match.params.interviewId)
  }, []);
  const applicant=recruiterContext.applicant;
  const job=recruiterContext.jobInfo;
  const report=recruiterContext.report;
  const qs=recruiterContext.quesanswer
  const [clicked , set_clicked] = useState(true)

  const toggle = () =>{
    set_clicked(!clicked)
  }

  return (

  <div className="container admin-cards">
    <div className='card'>
      <div className='card-header'>Report</div>
        <div className='card-body'>

            <div className="card">
              <div className='card-header'>User Info</div>
                <div className='card-body'>
                <table className="table table-sm">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>{applicant.name}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>{applicant.email}</td>
                    </tr>
                    <tr>
                      <td>Status</td>
                      <td>{report.status}</td>
                      <td>
                        {(clicked) ? (
                          <a
                            href='#'
                            onClick={ () => {toggle()}}
                            rel='tooltip'
                            className='btn btn-white btn-link btn-sm'
                            data-original-title='Edit {{ $module_name }}'
                          >
                            <i className='fa fa-pencil-square-o'></i>
                          </a>) : (
                            <form onSubmit={ (e) => {e.preventDefault(); recruiterContext.updateStatus(report.id , e.target.elements[0].value) }}>
                            <select name="status" /*onChange={(e) => {console.log('n',e.target.value)}}*/>
                              <option value="selected">Accepted</option>
                              <option value="not selected">Rejected</option>
                              <option value="under consideration">Under Consideration</option>
                            </select>
                            {/* <input type="text" name="edited" onChange={(e) => {set_edited(e.target.value)}} /> */}
                            <button type="submit">Update</button>
                          </form>
                          )}
                      </td>
                    </tr>
                    <tr>
                      <td>Score</td>
                      <td>{report.score?report.score:'-'}</td>
                    </tr>
                  </tbody>
                </table>
                </div>
            </div>

            <div className="card">
              <div className='card-header'>Job Info</div>
                <div className='card-body'>
                <table className="table table-sm">
                  <tbody>
                    <tr>
                      <td>Title</td>
                      <td>{job.title}</td>
                    </tr>
                    <tr>
                      <td>Description</td>
                      <td>{job.description}</td>
                    </tr>
                    <tr>
                      <td><small>Interview Duration</small></td>
                      <td><small>{job.interview_duration} secs</small></td>
                    </tr>
                    <tr>
                      <td><small>Created at</small></td>
                      <td><small>{job.created_at}</small></td>
                    </tr>
                    
                  </tbody>
                </table>
                </div>
            </div>

            <div className="card">
              <div className='card-header'>Interview Summary</div>
                <div className='card-body'>
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th scope="col">Question</th>
                      <th scope="col">Answer</th>
                      <th scope="col">Score</th>
                      
                    </tr>
                  </thead>
                    
                    <tbody>
                    {qs.map(q=>(
                      
                      <tr key={q.question.id} >
                        <td>{q.question.body}</td>
                    <td>{q.answer.body}</td>
                    <td>{q.answer.score}</td>
                        <td>
                          {(clicked) ? (
                          <a
                            href='#'
                            onClick={ () => {toggle()}}
                            rel='tooltip'
                            className='btn btn-white btn-link btn-sm'
                            data-original-title='Edit {{ $module_name }}'
                          >
                            <i className='fa fa-pencil-square-o'></i>
                          </a>) : (
                            <form onSubmit={ (e) => {e.preventDefault(); recruiterContext.updateScore(q.answer.id , e.target.elements[0].value) }}>
                            <input type="number" step="0.01" name="edited" />
                            <button type="submit">Update</button>
                          </form>
                          )}
                          
                      </td>
                      </tr>
                      
                      ))}
                      
                      
                    </tbody>
                  </table>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewReport;
