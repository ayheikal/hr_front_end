import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import AdminContext from '../../context/admin/adminContext';
const CreateQuestion = () => {
  const adminContext = useContext(AdminContext);
  useEffect(() => {
    if (adminContext.skills.length == 0) {
      adminContext.getSkills();
    }
  }, []);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log('create question', data);
    adminContext.createQuestion(data);
  };
  return (
    <div class='card'>
      <div class='card-header'>Add A New Question</div>
      <div class='card-body'>
        <div class='card-text'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='row'>
              <div className='col-md-5'>
                <div className='form-group'>
                  <label>Question Body</label>
                  <input
                    type='text'
                    name='body'
                    className='form-control'
                    ref={register}
                  />
                </div>
              </div>

              <div className='col-md-5'>
                <div className='form-group'>
                  <label>Skill</label>
                  <select
                    name='skill_id'
                    className='form-control '
                    ref={register}
                  >
                    {adminContext.skills.map((skill) => (
                      <option key={skill.id} value={skill.id}>
                        {skill.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-12 text-right'>
                <button type='submit' className='btn btn-primary'>
                  Add Question
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateQuestion;
