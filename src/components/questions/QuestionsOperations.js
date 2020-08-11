import React, { useContext, useEffect } from 'react';
import AdminContext from '../../context/admin/adminContext';

const QuesionsOperations = (props) => {
  const adminContext = useContext(AdminContext);
  useEffect(() => {
    adminContext.getQuestionsOfSkill(props.match.params.skillId);
  }, []);
  const questions = adminContext.questions;
  return (
    <div className='row'>
      <div className='col-md-12'>
        <div className='card'>
          <div className='card-header card-header-primary'>
            <div className='row'>
              <div className='col-md-8'>
                <h4 className='card-title '>Questions</h4>
                <p className='card-category'>
                  You can [Add | Delete | Update] Questions
                </p>
              </div>
              <div className='col-md-4 text-right'>
                <a
                  href='/admin/questions/create'
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
                    <th>Questions Body</th>
                    <th>Skill</th>
                    <th>Model Answers</th>
                    <th>Approved</th>
                    <th className='text-right'>control</th>
                  </tr>
                </thead>
                {questions.map((question) => (
                  <tbody key={question.id}>
                    <tr>
                      <td>{question.body}</td>
                      <td></td>
                      <td>
                        <a href='/admin/questions/1/answers'>Explore(5)</a>
                      </td>
                      <td>NO</td>
                      <td className='td-actions text-right'>
                        <a
                          href={`/admin/questions/1/update`}
                          rel='tooltip'
                          className='btn btn-white btn-link btn-sm'
                          data-original-title='Edit {{ $module_name }}'
                        >
                          <i className='fa fa-pencil-square-o'></i>
                        </a>

                        <button
                          onClick={() =>
                            adminContext.deleteQuestion(question.id)
                          }
                          type='submit'
                          rel='tooltip'
                          className='btn btn-white btn-link btn-sm'
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
export default QuesionsOperations;
