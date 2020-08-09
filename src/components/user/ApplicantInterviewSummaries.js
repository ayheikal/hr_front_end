import React from 'react';
import JobSummaryItem from './JobSummaryItem';



export default function ApplicantInterviewSummaries({ interviewSummaries }) {
  return interviewSummaries.map((interviewSummary) => (
    <>
      <JobSummaryItem
        key={interviewSummary.id}
        interviewSummary={interviewSummary}
      />
    </>
  ));
}
