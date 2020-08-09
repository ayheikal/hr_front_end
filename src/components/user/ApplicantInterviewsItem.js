import React, { useState } from 'react';
import ApplicantInterviewSummary from './ApplicantInterviewSummary';
const ApplicantInterviewsItem = ({ userAppliedJob, userName }) => {
  const { title, description, accept_interviews_from } = userAppliedJob.job;
  const [flag, setFlag] = useState(false);
  const switchFlag = () => {
    setFlag(!flag);
  };
  const component = (
    <div className='user-jobs'>
      {/* <!-- user name --> */}

      <div className='job-cards'>
        <div className='card'>
          <div className='card-header'>
            <span>{title}</span>
          </div>
          <div className='card-body'>
            <p className='card-text'>{description}</p>
            <div className='card-footer'>
              <small>Joined at: {accept_interviews_from}</small>

              <a
                className='button-more btn btn-primary'
                onClick={() => setFlag(!flag)}
              >
                More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return flag ? (
    <ApplicantInterviewSummary
      userAppliedJob={userAppliedJob.job}
      switchFlag={switchFlag}
    />
  ) : (
    component
  );
};

export default ApplicantInterviewsItem;
