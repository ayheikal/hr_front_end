import React, { useContext, useEffect } from 'react';
import UserContext from '../../context/user/userContext';
import ApplicantInterviewSummaries from './ApplicantInterviewSummaries';
import UserInfo from './UserInfo';
import ListApplicantInterviews from './ApplicantInterviewsItem';

import ApplicantInterviewsItem from './ApplicantInterviewsItem';
import { ApplicantInterviews } from './ApplicantInterviews';

const UserProfile = ({ match }) => {
  const userContext = useContext(UserContext);
  const userId = match.params.userId;
  useEffect(() => {
    userContext.getUserInfo();
    userContext.getInterviewDescriptionOfApplicant(userId);
  }, []);
  const { name } = userContext.user;
  console.log('user applied job', userContext.userAppliedJobs);

  return (
    <div className='wrap-profile'>
      <div className='row'>
        <div className='col-md-3'>
          <div className='row'>
            <div className='col-md-12'>
              <UserInfo user={userContext.user} />
            </div>
          </div>
        </div>
        <div className='col-md-9'>
          <div className='row'>
            <div className='col-md-12'>
              {console.log('applied: ',userContext.userAppliedJobs)}
              <ApplicantInterviews
                userAppliedJobs={userContext.userAppliedJobs}
                userName={name}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
