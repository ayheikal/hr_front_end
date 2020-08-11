import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import AdminContext from '../../context/admin/adminContext';

const UpdateQuestion = (props) => {
  const adminContext = useContext(AdminContext);
  useEffect(() => {
    if (adminContext.skills.length == 0) {
      adminContext.getSkills();
    }
    adminContext.getSkillById(props.match.params.skillId);
    adminContext.getQuestionById(props.match.params.questionId);
  }, []);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    adminContext.UpdateQuestion(data, props.match.params.questionId);
  };
  const someArray = adminContext.skills.filter(function (e) {
    return e.id !== adminContext.skill.id;
  });
  return (
    <div className='card'>
      <div className='card-header'>Edit Question</div>
      <div className='card-body'>
        <div className='card-text'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='row'>
              <div className='col-md-5'>
                <div className='form-group'>
                  <label>Question Body</label>
                  <input
                    type='text'
                    name='body'
                    className='form-control'
                    defaultValue={adminContext.question.body}
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
                    <option value={adminContext.skill.id}>
                      {adminContext.skill.name}
                    </option>
                    {someArray.map((skill) => (
                      <option key={skill.id} value={skill.id}>
                        {skill.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* <div className='form-group'>
                  <label>Approved</label>
                  <select name='skill' className='form-control ' ref={register}>
                    <option value='1'>Yes</option>
                    <option value='0'>NO</option>
                  </select>
                </div> */}
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

export default UpdateQuestion;
