import React, { useContext, useEffect } from 'react';
import PositionsContext from '../../context/positions/positionsContext';
// import PositionCard from './PositionCard';
import Spinner from '../layouts/Spinner';
const RecruiterPositionOperations = () => {
  const positionsContext = useContext(PositionsContext);
  useEffect(() => {
    positionsContext.getPositionsByRecruiterName();
    //eslint-disable-next-line
  }, []);

  const { loading, recruiterPositions } = positionsContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='row'>
        <div className='col-md-12'>
          <div className='card'>
            <div className='card-header card-header-primary'>
              <div className='row'>
                <div className='col-md-8'>
                  <h4 className='card-title '>positions</h4>
                  <p className='card-category'>
                    You can [Add | Delete | Update] positions
                  </p>
                </div>
                <div className='col-md-4 text-right'>
                  <a
                    href='/recruiter/positions/create'
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
                      <th>Title</th>
                      <th>Description</th>
                      <th>Status</th>
                      <th>Interviews</th>
                      <th className='text-right'>control</th>
                    </tr>
                  </thead>
                  {recruiterPositions.map((position) => (
                    <tbody key={position.id}>
                      <tr>
                        <td>
                          <a href='/recruiter/positions/1'>{position.title}</a>
                        </td>
                        <td>{position.description}</td>
                        <td>In Progress</td>
                        <td><a href={`/recruiter/jobs/${position.id}/interviews`}>Explore</a></td>
                        <td className='td-actions text-right'>
                          <a
                            href={`/recruiter/positions/${position.id}/update`}
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
                            data-original-title='Delete {{ $module_name }}'
                            onClick={() =>
                              positionsContext.deletePositionByRecruiter(
                                position.id
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
  }
};
export default RecruiterPositionOperations;
