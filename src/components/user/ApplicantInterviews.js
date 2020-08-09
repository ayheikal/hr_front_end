import React from 'react';
import ApplicantInterviewsItem from './ApplicantInterviewsItem';

export const ApplicantInterviews = ({ userAppliedJobs, userName }) => {
  return (
    <div>
      <div className='user-jobs'>
        {/* <!-- user name --> */}
        <h3 className='user-name'>
          <i className='fas fa-user' aria-hidden='true'></i> {userName}
          <hr />
        </h3>

        <div className='job-cards'>
          <div className='alert alert-primary' role='alert'>
            The interviews you have made
          </div>
        </div>
      </div>
      {userAppliedJobs.map((appliedjob) => (
        <div key={appliedjob.job.id}>
          {console.log('inside applicant interview: ', appliedjob)}
          <ApplicantInterviewsItem userAppliedJob={appliedjob} />
        </div>
      ))}
    </div>
  );
};
