import React from 'react'
import { useForm } from 'react-hook-form';


const UpdatePosition = () =>{

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div class="card">
          <div class="card-header">
            Edit Position
          </div>
          <div class="card-body">
            <div class="card-text">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-5">
    
                    <div className='form-group'>
                      <label>Job Title</label>
                      <input
                        type='text'
                        name='jobName'
                        className='form-control'
                        value="title"
                        ref={register}
                      />
                    </div>
    
                    <div className='form-group'>
                      <label>Interviews start at</label>
                      <input
                        type='date'
                        name='jobStart'
                        className='form-control'
                        value="2020-08-08 19:09:29"
                        ref={register}
                      />
                    </div>
    
                    <div className='form-group'>
                      <label>Interviews end at</label>
                      <input
                        type='date'
                        name='jobEnd'
                        className='form-control'
                        value='2020-08-08 19:09:29'
                        ref={register}
                      />
                    </div>
    
                    <div className='form-group'>
                      <label>Duration of Interview</label>
                      <input
                        type='number'
                        name='jobDuration'
                        className='form-control'
                        min='30'
                        value='5210'
                        ref={register}
                      />
                    </div>
    
                  </div>
    
                  
                  <div className="col-md-7">
    
                    <div className='form-group'>
                      <label>Job Description</label>
                      <textarea rows="10"
                        type='text'
                        name='jobDescription'
                        className='form-control'
                        value='Magni animi ducimus molestiae tempore aperiam vitae exercitationem. Cum quisquam hic dolores consectetur enim odit voluptatem. Optio placeat officiis maxime accusantium et laudantium. Qui quisquam labore alias distinctio sequi eius sequi.'
                        ref={register}
                      ></textarea>
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

export default UpdatePosition