import React, { useContext, useEffect } from 'react';
import Spinner from '../layouts/Spinner';
const JobQuestionsOperations = () => {

    return (
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header card-header-primary">
                <div className="row">
                    <div className="col-md-8">
                        <h4 className="card-title ">Questions</h4>
                        <p className="card-category">You can [Add | Delete | Update] Questions</p>
                    </div>
                    <div className="col-md-4 text-right">
                      <a href="/recruiter/positions/create" className="btn btn-primary btn-round">
                          <i className="fa fa-plus" ></i>
                      </a>
                    </div>
                </div>
              </div>
              <div className="card-body">
                

                <div className="table-responsive">
                  <table className="table">
                    <thead className=" text-primary">
                      <tr>
                        <th>Questions</th>
                        <th>Model Answers</th>
                        <th className="text-right">control</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                What is your name?
                            </td>
                            <td>
                              <a href="/recruiter/questions/1/modelAnswers">Explore</a>
                            </td>
                              <td className="td-actions text-right">
                              <a href={`/recruiter/positions/${localStorage.getItem('userId')}/update`} rel="tooltip" className="btn btn-white btn-link btn-sm" data-original-title="Edit {{ $module_name }}">
                                <i className="fa fa-pencil-square-o"></i>
                              </a>


                                <button type="submit" rel="tooltip" className="btn btn-white btn-link btn-sm" data-original-title="Delete {{ $module_name }}">
                                  <i className="fa fa-trash"></i>
                                </button>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                What is your name?
                            </td>
                            <td>
                              <a href="/recruiter/positions/1/questions/1/modelAnswers">Explore</a>
                            </td>
                            <td className="td-actions text-right">
                              <a href={`/recruiter/positions/${localStorage.getItem('userId')}/update`} rel="tooltip" className="btn btn-white btn-link btn-sm" data-original-title="Edit {{ $module_name }}">
                                <i className="fa fa-pencil-square-o"></i>
                              </a>


                                <button type="submit" rel="tooltip" className="btn btn-white btn-link btn-sm" data-original-title="Delete {{ $module_name }}">
                                  <i className="fa fa-trash"></i>
                                </button>

                            </td>
                        </tr>
                      
                    </tbody>
                  </table>
                </div>



              </div>
            </div>
          </div>
        </div>
        
      
    );
  
};
export default JobQuestionsOperations;
