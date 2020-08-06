import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import UserContext from '../../context/user/userContext'
import {Link} from 'react-router-dom'
const Sign = () => {
    const userContext = useContext(UserContext);

  const { register,errors, handleSubmit } = useForm();
  const onSubmit = (data) =>userContext.signIn(data)
  return (
    <div>
      <h1>signIn</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
          <label>Email</label>
          <input
            type='text'
            name='email'
            className='form-control'
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
        <button type='submit' className='btn btn-primary'>
          SigIn
        </button>
        {' | '}
        <Link to='signup' className='btn btn-primary' type='submit' name='action'>
          <i className='material-icons right'>SignUp</i>
        </Link>
      </form>
    </div>
  );
};

export default Sign;
