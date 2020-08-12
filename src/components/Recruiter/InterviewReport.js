import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import AdminContext from '../../context/admin/adminContext';
import RecruiterContext from '../../context/recruiter/recruiterContext'
const InterviewReport = (props) => {
  const { register, handleSubmit } = useForm();
  const recruiterContext =useContext(RecruiterContext)
  const onSubmit = (data) => {
 
  };

  useEffect(() => {
    recruiterContext.getReport(props.match.params.interviewId)
  }, []);
  const applicant=recruiterContext.applicant;
  const job=recruiterContext.jobInfo;
  const report=recruiterContext.report;
  const qs=recruiterContext.quesanswer
  return (

  <div className="container admin-cards">
    <div className='card'>
      <div className='card-header'>Report</div>
        <div className='card-body'>

            <div className="card">
              <div className='card-header'>User Info</div>
                <div className='card-body'>
                <table class="table table-sm">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>{applicant.name}</td>
                    </tr>
                    <tr>
                      {console.log(applicant)}
                      <td>Email</td>
                      <td>{applicant.email}</td>
                    </tr>
                    <tr>
                      <td>Status</td>
                      <td>{report.status}</td>
                      <td>
                          <a
                            href='#'
                            rel='tooltip'
                            className='btn btn-white btn-link btn-sm'
                            data-original-title='Edit {{ $module_name }}'
                          >
                            <i className='fa fa-pencil-square-o'></i>
                          </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Score</td>
                      <td>{report.score?report.score:'-'}/10</td>
                    </tr>
                  </tbody>
                </table>
                </div>
            </div>

            <div className="card">
              <div className='card-header'>Job Info</div>
                <div className='card-body'>
                <table class="table table-sm">
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
                <table class="table table-sm">
                  <thead>
                    <tr>
                      <th scope="col">Question</th>
                      <th scope="col">Answer</th>
                      <th scope="col">Score</th>
                      
                    </tr>
                  </thead>
                    
                    <tbody>
                    {qs.map(q=>(
                      
                      <tr >
                        <td>{q.question.body}</td>
                    <td>{q.answer.body}</td>
                    <td>{q.answer.score}</td>
                        <td>
                          <a
                            href='#'
                            rel='tooltip'
                            className='btn btn-white btn-link btn-sm'
                            data-original-title='Edit {{ $module_name }}'
                          >
                            <i className='fa fa-pencil-square-o'></i>
                          </a>
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
