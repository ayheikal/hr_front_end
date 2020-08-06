import React from 'react';
import { Link } from 'react-router-dom';
const PositionItem = ({ position }) => {
  const {
    /* id, */
    title,
    desc,
    accept_interviews_until,
    interviews_duration,
    updated_at,
    recruiter_id,
    /*  status, */
  } = position;
  return (
    <div className='card text-center' style={{ width: '18rem' }}>
      {/* <img src='...' className='card-img-top' alt='...' /> */}
      <div className='card-body'>
        <h5 className='card-title'>
          <Link to={'/1/1/interview/1'}>{title.toUpperCase()}</Link>
        </h5>
        <p className='card-text'>{desc}</p>
        <div className='card-text'>
          <p>Until: {accept_interviews_until}</p>
          <p>Duration: {interviews_duration}</p>
          <span>{updated_at}</span>
          <h3>Recruiter:{recruiter_id}</h3>
 
        </div>
      </div>

      <div className='card-body'>
        <Link className='btn btn-primary' to={'/1/1/interview/1'}>
          Apply
        </Link>
      </div>
    </div>
  );
};

export default PositionItem;
