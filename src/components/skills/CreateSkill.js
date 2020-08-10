import React from 'react';
import { useForm } from 'react-hook-form';

const CrateSkill = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div class="card">
      <div class="card-header">
        Add A New Skill
      </div>
      <div class="card-body">
        <div class="card-text">
          <form onSubmit={handleSubmit(onSubmit)}>
          
            <div className="row">
              <div className="col-md-5">

                <div className='form-group'>
                  <label>Skill Name</label>
                  <input
                    type='text'
                    name='name'
                    className='form-control'
                    ref={register}
                  />
                </div>
              </div>
            </div>

            <div className="row">

              <div className="col-md-12 text-right" >
                <button type='submit' className='btn btn-primary'>
                  Add Skill
                </button>
              </div>
                        
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default CrateSkill;
