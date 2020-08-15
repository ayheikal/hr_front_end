import React from 'react';

const ApplicantInterviewSummary = (props) => {
  const feedbackLinks = [];
  const { status, feedback } = props.userAppliedJob;
  const {
    title,
    description,
    accept_interviews_from,
  } = props.userAppliedJob.job;
  let x;
  let i, w;
  let arr = [];
  let summary = [];
  let feedback_arr = [];
  if (feedback !== null || feedback !== '') {
    feedback_arr = Object.entries(feedback);
  }
  // console.log('Try: ', props.userAppliedJob.feedback);

  // for (i in props.userAppliedJob.feedback) {
  //   console.log('re:', i);
  //   summary.push(props.userAppliedJob.feedback[i].summary);
  //   for (x in props.userAppliedJob.feedback[i].links) {
  //     console.log('x: ', props.userAppliedJob.feedback[i].links[x]);
  //     arr.push(props.userAppliedJob.feedback[i].links[x]);
  //   }
  // }
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
                  {/* {console.log('feedback', feedback)} */}
                  <td>Feedback &amp; Recommendation</td>
                  <td>
                    {feedback_arr.length === 0
                      ? null
                      : feedback_arr.map((skill_feedback) => (
                          <div>
                            <b>{skill_feedback[0]}</b>

                            <p>{skill_feedback[1].summary}</p>
                            <b>useful links:</b>
                            <ul>
                              {skill_feedback[1].links.map((link) => (
                                <li>
                                  <a href={link}> {link} </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                  </td>
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
