import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import UserContext from '../../context/user/userContext';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alert/alertContext';

import loginImage from './../../images/bg2.png'
import logo from '../../images/logo.png'

const Register = () => {
  const { register, errors, handleSubmit } = useForm();
  const userContext = useContext(UserContext);
  const alertContext = useContext(AlertContext);

  const onSubmit = (data) => {
    userContext.userRegister(data);
    const err = localStorage.getItem('alert');
    if (err) {
      alertContext.setAlert(err, 'danger');
    }
  };
  return (

    <div className="wrap-login">
      <div className="row">
        <div className="col-md-5">

          <div className="card">

            
            <div className="card-body">
              <div className="card-text">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className='form-group'>
                  <label>Full Name</label>
                  <input
                    type='text'
                    name='name'
                    className='form-control'
                    ref={register({ required: true,minLength:2 })}
                    // ref={register}
                  />
                  {errors.name && 'First Name is Required and more than two characters'}
                </div>
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
                        required: "Required",
                        minLength:8,
                        pattern: {

                          message: "invalid email address"
                        }
                      })}
                  />
                  {errors.password && 'password minLength 8 characters'}
                  </div>
                  <div className='form-group'>
                    <label>Confirm Password</label>
                    <input
                      type='password'
                      name='password_confirmation'
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
                      {errors.confirm_password && 'password minLength 8 characters'}
                    </div>
                    <div className='form-group'>
                      <label>role</label>
                      <select name='role' className='form-control ' ref={register}>
                        <option value='recruiter'>recruiter</option>
                        <option value='applicant'>applicant</option>
                      </select>
                    </div>
                    
                    <div className="row">
                      <div className="col-md-12">
                        <button type='submit' className='btn btn-primary'>
                          Register
                        </button>

                        <hr/>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12 text-center">
                          <Link
                            to='signin'
                            type='submit'
                            name='action'
                          >
                          <i className='material-icons right'>Have An Account</i>
                        </Link>
                      </div>
                    </div>

                  </form>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-7 text-center">
          <div className="login-image">
          
            <p><span className="colord-text">STAY HOME,</span> FIND A SUITABLE POSITION AND GET HIRED WITH AUTOMATED INTERVIEWS</p>
            <img src={loginImage} />
                  
          </div>
        </div>

      </div>

    </div>
  );
};

export default Register;
