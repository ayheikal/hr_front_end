import React from 'react';

const ApplicantInterviewSummary = (props) => {
  const { status, feedback } = props.userAppliedJob;
  const {
    title,
    description,
    accept_interviews_from,
  } = props.userAppliedJob.job;
  return (
    <div className='job-cards'>
      <div className='card'>
        <div className='alert alert-primary' role='alert'>
          Interview Summary
          {console.log('here: ', props.userAppliedJob)}
        </div>
        <div className='card-header'>
          <span>{title}</span>
          <span className='back-arrow'>
            <i
              className='fas fa-arrow-right'
              onClick={() => props.switchFlag()}
            ></i>
          </span>
        </div>

        <div className='card-body'>
          <div className='card-text interview-summary'>
            <table className='table'>
              <tbody>
                <tr>
                  <td>Job Description</td>
                  <td>{description}</td>
                </tr>
                <tr>
                  <td>Status</td>
                  {console.log('status',props.userAppliedJob)}
                  <td>{status}</td>
                </tr>
                <tr>
                  <td>Feedback &amp; Recommendation</td>
                  <td>{feedback}</td>
                </tr>
                <tr>
                  <td>
                    <small>JoinedAt</small>
                  </td>
                  <td>
                    <small>{accept_interviews_from}</small>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantInterviewSummary;
