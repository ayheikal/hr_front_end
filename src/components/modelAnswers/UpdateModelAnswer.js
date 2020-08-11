import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import AdminContext from '../../context/admin/adminContext';

const UpdateModelAnswer = (props) => {
  const adminContext = useContext(AdminContext);
  const questionId = props.match.params.questionId;
  const answerId = props.match.params.answerId;
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    adminContext.getModelAnswerById(answerId);
    adminContext.getQuestionById(questionId);
  }, []);
  const onSubmit = (data) => {
    adminContext.updateModelAnswer(data, answerId, questionId);
  };

  return (
    <div className="container admin-cards">
    <div className='card'>
      <div className='card-header'>
        Edit the Answer of the following Question :
        <p classNameName='card-category'>{adminContext.question.body}</p>
      </div>
      <div className='card-body'>
        <div className='card-text'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='row'>
              <div className='col-md-5'>
                <div className='form-group'>
                  <label>Answer Body</label>
                  <input
                    type='hidden'
                    name='question_id'
                    value={questionId}
                    ref={register}
                  />
                  <input
                    type='text'
                    name='body'
                    className='form-control'
                    defaultValue={adminContext.modelAnswer.body}
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
    </div>
  );
};

export default UpdateModelAnswer;
