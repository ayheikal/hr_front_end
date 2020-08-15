import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import PositionsContext from '../../context/positions/positionsContext';
import AdminContext from '../../context/admin/adminContext';
import adminContext from '../../context/admin/adminContext';
import RecruiterContext from '../../context/recruiter/recruiterContext';
const CreatePosition = (props) => {
  const { register, handleSubmit, watch } = useForm();
  const watchSkills = watch('skills');
  const watchQuestions = [watch('questions')];
  const positionsContext = useContext(PositionsContext);
  const adminContext = useContext(AdminContext);
  const recruiterContext = useContext(RecruiterContext);
  const [skills, setSkills] = useState();
  const [flag, setFlag] = useState(false);
  //if (watchSkills) recruiterContext.getQuestionsOfSkills(watchSkills);
  let pastWatchSkills = [];
  useEffect(() => {
    adminContext.getSkills();
  }, [props.isOpen]);
  const onSubmit = (data) => {
    console.log('craete position-->', data);
    positionsContext.addNewPosition(data);
  };
  const handleGetQuestions = () => {
    watchSkills &&
      watchSkills.length > 0 &&
      recruiterContext.getQuestionsOfSkills(watchSkills);
  };
  return (
    <div className='card '>
      {watchSkills}
      <div className='card-header '>Add A New Position</div>
      <div className='card-body col-sm-6'>
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
                <div className='form-group'></div>
              </div>
            </div>

            {console.log('======>', recruiterContext.questions)}
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
      <div className='col-sm-6'>
        <h3>skills</h3>
        {console.log('create position: ', adminContext.skills)}
        <div>
          {' '}
          {adminContext.skills.map((skill) => (
            <p>
              <input
                type='checkbox'
                name='skills'
                ref={register}
                value={skill.id}
              />
              {skill.name}
            </p>
          ))}
        </div>
        <label>
          <button type='button' onClick={() => handleGetQuestions()}>
            refresh
          </button>
          <h3>Questions</h3>
        </label>
        {/* {watchSkills &&
          watchSkills.length > 0 &&
          recruiterContext.getQuestionsOfSkills(watchSkills)} */}
        {recruiterContext.questions.map((question) => (
          <p>
            <input
              type='checkbox'
              name='questions'
              ref={register}
              value={question.id}
            />
            {question.body}
          </p>
        ))}
      </div>
    </div>
  );
};

// const appendQuestions = (questions) => {
//   let old = positionsContext.questions;
// };

export default CreatePosition;

// arguments: reference to select list, callback function (optional)
function getSelectedOptions(sel, fn) {
  var opts = [],
    opt;

  // loop through options in select list
  for (var i = 0, len = sel.options.length; i < len; i++) {
    opt = sel.options[i];

    // check if selected
    if (opt.selected) {
      // add to array of option elements to return from this function
      opts.push(opt);

      // invoke optional callback function if provided
      if (fn) {
        fn(opt);
      }
    }
  }

  // return array containing references to selected option elements
  return opts;
}

function handel(e) {
  e.preventDefault();
  // reference to select list using this keyword and form elements collection
  // no callback function used this time
  var opts = getSelectedOptions(document.getElementById('#demoSel'));

  console.log('options ', opts);
  alert('The number of options selected is: ' + opts.length); //  number of selected options

  return false; // don't return online form
}
