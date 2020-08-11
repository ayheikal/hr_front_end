import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import PositionsContext from '../../context/positions/positionsContext'

const PositionItem = ({ position }) => {
  const positionContext = useContext(PositionsContext);


  const {
    id,
    title,
    description,
    accept_interviews_until,
    interview_duration,
    recruiter_id,
    /*  status, */
  } = position;
  console.log(position)
  return (
    <div className='card'>
      {/* <img src='...' className='card-img-top' alt='...' /> */}
      <div className='card-body'>
        <div className="row">
          <div className="col-md-12">
            <span className='card-title'>
              {title.toUpperCase()}
            </span>
          </div>
          <hr/>
        </div>
        <div className="row">
          <div className="col-md-12">
            <span>
              {description}
            </span>
          </div>
        </div>
        <hr/>

        <div className="row">
          <div className="col-md-4">
            <small>
              INTERVIEWS DEADLINE
            </small>
          </div>
          <div className="col-md-4">
            <small>
              {accept_interviews_until}
            </small>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <small>
              INTERVIEW DURATION
            </small>
          </div>
          <div className="col-md-4">
            <small>
            {interview_duration}
            </small>
          </div>
          <div className="col-md-5 text-right">
            <button className='btn btn-primary' onClick={() => { 
              let userId = 1
              positionContext.handleApply(id, userId )
              }}>
            Apply
          </button>
          </div>
        </div>
          
      </div>
    </div>
  );
};



export default PositionItem;
