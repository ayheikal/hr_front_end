import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import PositionsContext from '../../context/positions/positionsContext';

const CreatePosition = () => {
  const { register, handleSubmit } = useForm();
  const positionsContext = useContext(PositionsContext);
  const onSubmit = (data) => positionsContext.addNewPosition(data);
  return (
    <div>
      <h1>Add Position</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
          <label>Job Title</label>
          <input
            type='text'
            name='jobName'
            className='form-control'
            ref={register}
          />
        </div>
        <div className='form-group'>
          <label>Job Description</label>
          <input
            type='text'
            name='jobDescription'
            className='form-control'
            ref={register}
          />
        </div>
        <div className='form-group'>
          <label>Starts At</label>
          <input
            type='date'
            name='jobStart'
            className='form-control'
            ref={register}
          />
        </div>
        <div className='form-group'>
          <label>Ends At</label>
          <input
            type='date'
            name='jobEnd'
            className='form-control'
            ref={register}
          />
        </div>
        <div className='form-group'>
          <label>Duration of Interview</label>
          <input
            type='number'
            name='jobDuration'
            className='form-control'
            min='30'
            ref={register}
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Post Position
        </button>
      </form>
    </div>
  );
};

export default CreatePosition;
