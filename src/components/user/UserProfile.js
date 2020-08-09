import React, { useContext, useEffect } from 'react';
import UserContext from '../../context/user/userContext';
import ApplicantInterviewSummaries from './ApplicantInterviewSummaries';
import UserInfo from './UserInfo'
import ListApplicantInterviews from './ListApplicantInterviews'
import ApplicantInterviewSummary from './ApplicantInterviewSummary'

const UserProfile = ({ match }) => {
  const userContext = useContext(UserContext);
  const userId = match.params.userId;
  useEffect(() => {
    userContext.getUserInfo(userId);
    userContext.getInterviewDescriptionOfApplicant(userId);
  }, []);
  const { name, email, bio } = userContext.user;

  return (

          <div className="wrap-profile container">
              
              <div className="row">
                  <div className="col-md-3">
                      <div className="row">
                          <div className="col-md-12">
                              <UserInfo />
                          </div>
                      </div>

                  </div>
                  <div className="col-md-9">
                      <div className="row">
                          <div className="col-md-12">
                              <ListApplicantInterviews />
                              {/* <ApplicantInterviewSummary /> */}
                          </div>
                      </div>
                      
                  </div>
              </div>
                  
          </div>
      
  );
};

export default UserProfile;
