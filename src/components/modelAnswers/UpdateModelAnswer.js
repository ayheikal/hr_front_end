import React from 'react'
import { useForm } from 'react-hook-form';


const UpdateModelAnswer = () =>{

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div class="card">
          <div class="card-header">
            Edit the Answer of the following Question :
            <p className="card-category">Question_body_here?</p>
          </div>
          <div class="card-body">
            <div class="card-text">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-5">
    
                    <div className='form-group'>
                      <label>Answer Body</label>
                      <input
                        type='text'
                        name='body'
                        className='form-control'
                        value="Answer_body_is_here"
                        ref={register}
                      />
                    </div>
    
                  </div>
                
                </div>
    
                <div className="row">
    
                  <div className="col-md-12 text-right" >
                    <button type='submit' className='btn btn-primary'>
                      Update
                    </button>
                  </div>
                            
                </div>
        
    
                
                
    
              </form>
            </div>
          </div>
        </div>
    )
}

export default UpdateModelAnswer