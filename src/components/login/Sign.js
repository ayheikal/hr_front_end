import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import UserContext from '../../context/user/userContext'
import {Link} from 'react-router-dom'
const Sign = () => {
    const userContext = useContext(UserContext);

  const { register,errors, handleSubmit } = useForm();
  const onSubmit = (data) =>userContext.signIn(data)
  return (
    <div className="row">
      <div className="col-md-5">


      <div class="card">
      <div class="card-header">
        Login
      </div>
      <div class="card-body">
        <div class="card-text">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-10">
                <div className='form-group'>
                  <label>Email</label>
                  <input
                    type='text'
                    name='email'
                    className='form-control'
                    // ref={register}
                    ref={register({
                        required: "Required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "invalid email address"
                        }
                      })}
                  />
                  {errors.email&&"Invalid email address"}
                </div>

                <div className='form-group'>
                  <label>Password</label>
                  <input
                    type='password'
                    name='password'
                    className='form-control'
                    // ref={register}
                    ref={register({
                        required: "Required",
                        minLength:8,
                        pattern: {
                          
                          message: "invalid email address"
                        }
                      })}
                  />
                  {errors.password&&"password minLength 8 characters"}
                </div>

              </div>

              

              

            </div>

            <div className="row">
                <div className="col-md-12 text-right">
                  
                  <Link to='signup' type='submit' name='action'>
                    <i className='material-icons right'>Don't Have an account </i>
                  </Link>
                  {' | '}
                  
                  <button type='submit' className='btn btn-primary'>
                    Login
                  </button>

                </div>
            </div>
            
            
        
      </form>
        </div>
      </div>
    </div>

      </div>
    </div>
    
  );
};

export default Sign;
