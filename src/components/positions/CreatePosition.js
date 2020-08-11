import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import PositionsContext from '../../context/positions/positionsContext';
import AdminContext from '../../context/admin/adminContext';
import adminContext from '../../context/admin/adminContext';
const CreatePosition = () => {
  const { register, handleSubmit, watch } = useForm();
  const watchSkills = watch('skills');
  const positionsContext = useContext(PositionsContext);
  const adminContext = useContext(AdminContext);
  const [skills, setSkills] = useState();
  const onSubmit = (data) => {
    console.log('craete position', data);
    positionsContext.addNewPosition(data);
  };
  useEffect(() => {
    adminContext.getSkills();
  }, []);
  return (
    <div className='card'>
      {skills}
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
                <div className='form-group'>
                  <label>skills</label>
                  {console.log('create position: ', adminContext.skills)}

                  {adminContext.skills.map((skill) => (
                    <div key={skill.id}>
                      <input
                        type='checkbox'
                        name='skills'
                        ref={register}
                        value={skill.id}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {watchSkills.map((skillId) =>
              appendQuestions(getQuestionsBySkillId(skillId))
            )}

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
            {/* </div> */}

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


const appendQuestions(questions) =>{
  let old = positionsContext.questions
}


export default CreatePosition;
