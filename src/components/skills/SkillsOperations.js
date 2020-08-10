import React, { useContext, useEffect } from 'react';
import Spinner from '../layouts/Spinner';
import AdminContext from '../../context/admin/adminContext';

const SkillsOperations = (props) => {
  const adminContext = useContext(AdminContext);
  useEffect(() => {
    adminContext.getSkills();
  }, []);
  return (
    <div className='row'>
      <div className='col-md-12'>
        <div className='card'>
          <div className='card-header card-header-primary'>
            <div className='row'>
              <div className='col-md-8'>
                <h4 className='card-title '>Skills</h4>
                <p className='card-category'>
                  You can [Add | Delete | Update] Skills
                </p>
              </div>
              <div className='col-md-4 text-right'>
                <a
                  href='/admin/skills/create'
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
                    <th>Skill Name</th>
                    <th>Created at</th>
                    <th>Updated at</th>
                    <th className='text-right'>control</th>
                  </tr>
                </thead>
                {adminContext.skills.map((skill) => (
                  <tbody>
                    <tr>
                      <td>{skill.name}</td>
                      <td>2020-10-05 22:23:22</td>
                      <td>2020-10-05 22:23:22</td>
                      <td className='td-actions text-right'>
                        <a
                          href={`/admin/skills/1/update`}
                          rel='tooltip'
                          className='btn btn-white btn-link btn-sm'
                          data-original-title='Edit {{ $module_name }}'
                        >
                          <i className='fa fa-pencil-square-o'></i>
                        </a>

                        <button
                          onClick={() =>
                            adminContext.deleteSkill(props.match.params.skillId)
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
export default SkillsOperations;
