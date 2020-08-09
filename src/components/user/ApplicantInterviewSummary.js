import React from 'react';

const ApplicantInterviewSummary = (props) => {
  const { title, desc, status, feedback, joinedAt } = props.user;
  return (
    <div className='job-cards'>
      <div className='card'>
        <div className='alert alert-primary' role='alert'>
          Interview Summary
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
                  <td>{desc}</td>
                </tr>
                <tr>
                  <td>Status</td>
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
                    <small>{joinedAt}</small>
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
