import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import AdminContext from '../../context/admin/adminContext';
const CrateSkill = () => {
  const adminContext = useContext(AdminContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    adminContext.createSkill(data);
  };
  return (
    <div className="container admin-cards">
    <div class='card'>
      <div class='card-header'>Add A New Skill</div>
      <div class='card-body'>
        <div class='card-text'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='row'>
              <div className='col-md-5'>
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

            <div className='row'>
              <div className='col-md-12 text-right'>
                <button type='submit' className='btn btn-primary'>
                  Add Skill
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CrateSkill;
