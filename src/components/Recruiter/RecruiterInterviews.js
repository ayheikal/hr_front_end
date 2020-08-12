import React, { useContext, useEffect } from 'react';
import RecruiterContext from '../../context/recruiter/recruiterContext';

const InterviewReport = (props) => {
  const recruiterContext = useContext(RecruiterContext);
  useEffect(() => {
    recruiterContext.getJobInterviews(props.match.params.jobId);
  }, []);
  return (
    <div className="container admin-cards">
      <div className='row'>
        <div className='col-md-12'>
          <div className='card'>
            <div className='card-header card-header-primary'>
              <div className='row'>
                <div className='col-md-8'>
                  <h4 className='card-title '>Interviews</h4>
                  <p className='card-category'>
                    Explore All Interviews Which made on this Job
                  </p>
                </div>
              </div>
            </div>
            <div className='card-body'>
              <div className='table-responsive'>
                <table className='table'>
                  <thead className=' text-primary'>
                    <tr>
                      <th>Applicant Name</th>
                      <th>Interview Status</th>
                      <th>Score</th>
                      <th>Report</th>
                    </tr>
                  </thead>
                  {recruiterContext.jobInterviews.map((inter) => (
                    <tbody key={inter.id}>
                      <tr>
                        <td>{inter.applicant.name}</td>
                        <td>{inter.status}</td>
                        <td>{inter.score}</td>
                        <td>
                          <a
                            href={`/recruiter/interviews/${inter.id}/report`}
                          >
                            Explore
                          </a>
                        </td>
                        
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InterviewReport;
