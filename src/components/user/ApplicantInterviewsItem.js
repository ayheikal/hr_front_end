import React, { useState } from 'react';
import ApplicantInterviewSummary from './ApplicantInterviewSummary';
const ApplicantInterviewsItem = ({ userAppliedJob, userName }) => {
  const { title, desc, joinedAt } = userAppliedJob;
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
            <p className='card-text'>{desc}</p>
            <div className='card-footer'>
              <small>Joined at: {joinedAt}</small>

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
    <ApplicantInterviewSummary user={userAppliedJob} switchFlag={switchFlag} />
  ) : (
    component
  );
};

export default ApplicantInterviewsItem;
