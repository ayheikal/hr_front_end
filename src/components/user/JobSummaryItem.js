import React from 'react';

const JobSummaryItem = ({ interviewSummary }) => {
  console.log('interview Summary: ', interviewSummary);
  return (
    <div>
      <h1>title:{interviewSummary.title}</h1>
      <a className='btn btn-primary'>more</a>
    </div>
  );
};
export default JobSummaryItem;
