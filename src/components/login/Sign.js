import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import UserContext from '../../context/user/userContext';
import { Link } from 'react-router-dom';

import loginImage from './../../images/bg2.png';
import logo from '../../images/logo.png';

const Sign = () => {
  const userContext = useContext(UserContext);

  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => userContext.signIn(data);
  return (
    <div className='wrap-login'>
      <div className='row'>
        <div className='col-md-5'>
          <div className='card'>
            <div className='card-body'>
              <div className='card-text'>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className='row'>
                    <div className='col-md-12'>
                      <div className='form-group'>
                        <label>Email</label>
                        <input
                          type='text'
                          name='email'
                          className='form-control'
                          // ref={register}
                          ref={register({
                            required: 'Required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'invalid email address',
                            },
                          })}
                        />
                        {errors.email && 'Invalid email address'}
                      </div>

                      <div className='form-group'>
                        <label>Password</label>
                        <input
                          type='password'
                          name='password'
                          className='form-control'
                          // ref={register}
                          ref={register({
                            required: 'Required',
                            minLength: 8,
                            pattern: {
                              message: 'invalid email address',
                            },
                          })}
                        />
                        {errors.password && 'password minLength 8 characters'}
                      </div>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-12'>
                      <button type='submit' className='btn btn-primary'>
                        Login
                      </button>

                      <hr />
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-12 text-center links'>
                      <Link to='signup' type='submit' name='action'>
                        <i className='material-icons right'>
                          Don't Have an account{' '}
                        </i>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-7 text-center'>
          <div className='login-image'>
            <p>
              <span className='colord-text'>STAY HOME,</span> FIND A SUITABLE
              POSITION AND GET HIRED WITH AUTOMATED INTERVIEWS
            </p>
            <img src={loginImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
