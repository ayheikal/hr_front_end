import React, { component } from 'react';
import { Link } from 'react-router-dom';
const PositionItem = ({ position }) => {
  const {
    id,
    title,
    description,
    accepts_interviews_from_datetime,
    accepts_interviews_until,
    interview_duration,
    status,
  } = position;
  return (
    <div className='card text-center' style={{ width: '18rem' }}>
      {/* <img src='...' className='card-img-top' alt='...' /> */}
      <div className='card-body'>
        <h5 className='card-title'>
          <Link to={'/1/1/interview/1'}>{title.toUpperCase()}</Link>
        </h5>
        <p className='card-text'>{description}</p>
        <div className='card-text'>
          <p>Until: {accepts_interviews_until}</p>
          <p>Duration: {interview_duration}</p>
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
