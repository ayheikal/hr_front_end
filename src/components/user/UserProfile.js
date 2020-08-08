import React, { useContext, useEffect } from 'react';
import UserContext from '../../context/user/userContext';
import ApplicantInterviewSummaries from './ApplicantInterviewSummaries';

const UserProfile = ({ match }) => {
  const userContext = useContext(UserContext);
  const userId = match.params.userId;
  useEffect(() => {
    userContext.getUserInfo(userId);
    userContext.getInterviewDescriptionOfApplicant(userId);
  }, []);
  const { name, email, bio } = userContext.user;

  return (
    <div className='profile-container'>
      <div className='profile-info'>profile:{match.params.userId}</div>
      <div> {name}</div>
      <div> {email}</div>
      <div> {bio}</div>
      <ApplicantInterviewSummaries
        interviewSummaries={userContext.userAppliedJobs}
      />
    </div>
  );
};

export default UserProfile;
