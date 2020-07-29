import React from 'react';
import { Link } from 'react-router-dom';
const PositionCard = ({ position }) => {
  const {
    /* id, */
    title,
    description,
    accepts_interviews_until,
    interview_duration,

    /*  status, */
  } = position;
  return (
    <div className='card text-center' style={{ width: '18rem' }}>
      {/* <img src='...' className='card-img-top' alt='...' /> */}
      <div className='card-body'>
        <h5 className='card-title'>{title.toUpperCase()}</h5>
        <p className='card-text'>{description}</p>
        <div className='card-text'>
          <p>Until: {accepts_interviews_until}</p>
          <p>Duration: {interview_duration}</p>
        </div>
      </div>

      <div className='card-body'>
        <button className='btn btn-secondary'>update</button>
        <button className='btn btn-danger'>delete</button>
      </div>
    </div>
  );
};

export default PositionCard;
