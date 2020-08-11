import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import AdminContext from '../../context/admin/adminContext';
const CreateModelAnswer = (props) => {
  const adminContext = useContext(AdminContext);
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    adminContext.getQuestionById(props.match.params.questionId);
  }, []);
  const onSubmit = (data) => {
    adminContext.createModelAnswer(data, props.match.params.questionId);
  };
  return (
    <div className="container admin-cards">
    <div class='card'>
      <div class='card-header'>
        Add A New Answer of the following Question :
        <p className='card-category'>{adminContext.question.body}</p>
      </div>
      <div class='card-body'>
        <div class='card-text'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type='hidden'
              name='question_id'
              value={props.match.params.questionId}
              ref={register}
            ></input>
            <div className='row'>
              <div className='col-md-5'>
                <div className='form-group'>
                  <label>Answer Body</label>
                  <input
                    type='text'
                    name='body'
                    className='form-control'
                    ref={register}
                  />
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-12 text-right'>
                <button type='submit' className='btn btn-primary'>
                  Add Answer
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

export default CreateModelAnswer;
