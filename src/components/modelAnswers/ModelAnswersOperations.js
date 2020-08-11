import React, { useContext, useEffect } from 'react';
import AdminContext from '../../context/admin/adminContext';

const ModelAnswersOperations = (props) => {
  const adminContext = useContext(AdminContext);
  useEffect(() => {
    adminContext.getModelAnswers(props.match.params.questionId);
  }, []);

  const modelAnswers = adminContext.modelAnswers;
  return (
    <div className='row'>
      <div className='col-md-12'>
        <div className='card'>
          <div className='card-header card-header-primary'>
            <div className='row'>
              <div className='col-md-8'>
                <h4 className='card-title '>Model Answers</h4>
                <p className='card-category'>
                  You can [Add | Delete | Update] Model Answers of the question
                </p>
              </div>
              <div className='col-md-4 text-right'>
                <a
                  href={`/admin/questions/${props.match.params.questionId}/answers/create`}
                  className='btn btn-primary btn-round'
                >
                  <i className='fa fa-plus'></i>
                </a>
              </div>
            </div>
          </div>
          <div className='card-body'>
            <div className='table-responsive'>
              <table className='table'>
                <thead className=' text-primary'>
                  <tr>
                    <th>Answer Body</th>
                    <th>Created at</th>
                    <th>Updated at</th>
                    <th className='text-right'>control</th>
                  </tr>
                </thead>
                {adminContext.modelAnswers.map((modelAnswer) => (
                  <tbody key={modelAnswer.id}>
                    <tr>
                      <td>{modelAnswer.body}</td>
                      <td>{modelAnswer.created_at}</td>
                      <td>{modelAnswer.updated_at}</td>
                      <td className='td-actions text-right'>
                        <a
                          href={`/admin/questions/${modelAnswer.question_id}/answers/${modelAnswer.id}/update`}
                          rel='tooltip'
                          className='btn btn-white btn-link btn-sm'
                          data-original-title='Edit {{ $module_name }}'
                        >
                          <i className='fa fa-pencil-square-o'></i>
                        </a>

                        <button
                          type='submit'
                          rel='tooltip'
                          className='btn btn-white btn-link btn-sm'
                          onClick={() =>
                            adminContext.deleteModelAnswer(
                              modelAnswer.id,
                              modelAnswer.question_id
                            )
                          }
                        >
                          <i className='fa fa-trash'></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModelAnswersOperations;
