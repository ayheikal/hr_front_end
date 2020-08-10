import React, { useEffect, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import PositionContext from '../../context/positions/positionsContext';
const UpdatePosition = (props) => {
  const positionContext = useContext(PositionContext);
  useEffect(() => {
    positionContext.getPositionById(props.match.params.positionId);
  }, []);

  const [title, setTitle] = useState('kkkkkkkkk');
  const [description, setDescription] = useState(
    positionContext.position.description
  );
  const [accept_interviews_from, setFrom] = useState(
    positionContext.position.accept_interviews_from
  );
  const [accept_interviews_until, setUntil] = useState(
    positionContext.position.accept_interviews_until
  );
  const [interview_duration, setDuration] = useState(
    positionContext.position.interview_duration
  );

  const onSubmit = (data) => {
    positionContext.UpdatePosition(data, positionContext.position.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit: ', title);
  };
  return (
    <div className='card'>
      <div className='card-header'>Edit Position</div>
      <div className='card-body'>
        <div className='card-text'>
          <form onSubmit={(e) => handleSubmit}>
            <div className='row'>
              <div className='col-md-5'>
                <div className='form-group'>
                  <label>Job Title</label>
                  <input
                    type='text'
                    name='title'
                    className='form-control'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className='form-group'>
                  <label>Interviews start at</label>
                  <input
                    type='date'
                    name='accept_interviews_from'
                    className='form-control'
                    value={accept_interviews_from}
                    onChange={(e) => setFrom(e.target.value)}
                  />
                </div>

                <div className='form-group'>
                  <label>Interviews end at</label>
                  <input
                    type='date'
                    name='accept_interviews_until'
                    className='form-control'
                    value={accept_interviews_until}
                    onChange={(e) => setUntil(e.target.value)}
                  />
                </div>

                <div className='form-group'>
                  <label>Duration of Interview</label>
                  <input
                    type='number'
                    name='interview_duration'
                    className='form-control'
                    min='30'
                    value={interview_duration}
                    onChange={(e) => setDuration(e.target.value)}
                  />
                </div>
              </div>

              <div className='col-md-7'>
                <div className='form-group'>
                  <label>Job Description</label>
                  <textarea
                    rows='10'
                    type='text'
                    name='description'
                    className='form-control'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-12 text-right'>
                <button
                  type='submit'
                  className='btn btn-primary'
                  onClick={() => handleSubmit}
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePosition;
