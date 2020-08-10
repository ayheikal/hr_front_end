import React, { useContext, useEffect } from 'react';


const ModelAnswersOperations = () => {

    return (
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header card-header-primary">
                <div className="row">
                    <div className="col-md-8">
                        <h4 className="card-title ">Model Answers</h4>
                        <p className="card-category">You can [Add | Delete | Update] Model Answers of the question : Question_body_here?</p>
                    </div>
                    <div className="col-md-4 text-right">
                      <a href="/admin/questions/1/answers/create" className="btn btn-primary btn-round">
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
                        <th>Answer Body</th>
                        <th>Created at</th>
                        <th>Updated at</th>
                        <th className="text-right">control</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Here_is_the_answer_of_the_above_question</td>
                        <td>2020-10-05 22:23:22</td>
                        <td>2020-10-05 22:23:22</td>
                        <td className="td-actions text-right">
                          <a href={`/admin/questions/1/answers/1/update`} rel="tooltip" className="btn btn-white btn-link btn-sm" data-original-title="Edit {{ $module_name }}">
                            <i className="fa fa-pencil-square-o"></i>
                          </a>


                            <button type="submit" rel="tooltip" className="btn btn-white btn-link btn-sm">
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
export default ModelAnswersOperations;
