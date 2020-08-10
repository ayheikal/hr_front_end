import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import PositionsContext from '../../context/positions/positionsContext';

const CreatePosition = () => {
  const { register, handleSubmit } = useForm();
  const positionsContext = useContext(PositionsContext);
  const onSubmit = (data) => positionsContext.addNewPosition(data);
  return (
    <div className='card'>
      <div className='card-header'>Add A New Position</div>
      <div className='card-body'>
        <div className='card-text'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='row'>
              <div className='col-md-5'>
                <div className='form-group'>
                  <label>Job Title</label>
                  <input
                    type='text'
                    name='title'
                    className='form-control'
                    ref={register}
                  />
                </div>

                <div className='form-group'>
                  <label>Interviews start at</label>
                  <input
                    type='datetime-local'
                    name='accept_interviews_from'
                    className='form-control'
                    ref={register}
                  />
                </div>

                <div className='form-group'>
                  <label>Interviews end at</label>
                  <input
                    type='datetime-local'
                    name='accept_interviews_until'
                    className='form-control'
                    ref={register}
                  />
                </div>

                <div className='form-group'>
                  <label>Duration of Interview</label>
                  <input
                    type='number'
                    name='interview_duration'
                    className='form-control'
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
                    ref={register}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-12 text-right'>
                <button type='submit' className='btn btn-primary'>
                  Post Position
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePosition;
