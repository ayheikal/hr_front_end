import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import AdminContext from '../../context/admin/adminContext';
const UpdateSkill = (props) => {
  const adminContext = useContext(AdminContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log('updateAkill: ', data);
    adminContext.updateSkill(data, props.match.params.skillId);
  };

  useEffect(() => {
    console.log('update skill: ', props.match.params.skillId);
    adminContext.getSkillById(props.match.params.skillId);
  }, []);
  const { id, name } = adminContext.skill;
  return (
    <div class='card'>
      <div class='card-header'>Edit Skill</div>
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
                    defaultValue={name}
                    ref={register}
                  />
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

export default UpdateSkill;
