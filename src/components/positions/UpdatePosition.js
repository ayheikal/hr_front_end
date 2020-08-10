import React, { useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import PositionContext from '../../context/positions/positionsContext';
const UpdatePosition = (props) => {
  const positionContext = useContext(PositionContext);

  useEffect(() => {
    positionContext.getPositionById(props.match.params.positionId);
  }, []);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    positionContext.UpdatePosition(data, id);
  };
  const {
    id,
    title,
    description,
    accept_interviews_from,
    accept_interviews_until,
    interview_duration,
  } = positionContext.position;
  return (
    <div class='card'>
      <div class='card-header'>Edit Position</div>
      <div class='card-body'>
        <div class='card-text'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='row'>
              <div className='col-md-5'>
                <div className='form-group'>
                  <label>Job Title</label>
                  <input
                    type='text'
                    name='title'
                    className='form-control'
                    value={title}
                    ref={register}
                  />
                </div>

                <div className='form-group'>
                  <label>Interviews start at</label>
                  <input
                    type='date'
                    name='accept_interviews_from'
                    className='form-control'
                    value={accept_interviews_from}
                    ref={register}
                  />
                </div>

                <div className='form-group'>
                  <label>Interviews end at</label>
                  <input
                    type='date'
                    name='accept_interviews_until'
                    className='form-control'
                    value={accept_interviews_until}
                    ref={register}
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
                    ref={register}
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
                    ref={register}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-12 text-right'>
                <button type='submit' className='btn btn-primary'>
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
