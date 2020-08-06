import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import UserContext from '../../context/user/userContext'
import {Link} from 'react-router-dom'
const Register = () => {
  const { register,errors, handleSubmit } = useForm();
  const userContext = useContext(UserContext);
  const onSubmit = (data) =>userContext.userRegister(data)
  return (
    <div>
      <h1>signup</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
          <label>Full Name</label>
          <input
            type='text'
            name='name'
            className='form-control'
            // ref={register({ required: true,minLength:2 })}
            ref={register}
          />
          {errors.name&&"First Name is Required and more than two characters"}
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input
            type='text'
            name='email'
            className='form-control'
            ref={register}
            // ref={register({
            //     required: "Required",
            //     pattern: {
            //       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            //       message: "invalid email address"
            //     }
            //   })}
          />
          {errors.email&&"Invalid email address"}
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            type='password'
            name='password'
            className='form-control'
            ref={register}
            // ref={register({
            //     required: "Required",
            //     minLength:8,
            //     pattern: {
                   
            //       message: "invalid email address"
            //     }
            //   })}
          />
          {errors.password&&"password minLength 8 characters"}
        </div>
        <div className='form-group'>
          <label>Confirm Password</label>
          <input
            type='password'
            name='password_confirmation'
            className='form-control'
            ref={register}
            // ref={register({
            //     required: "Required",
            //     minLength:8,
            //     pattern: {
                   
            //       message: "invalid email address"
            //     }
            //   })}
          />
          {errors.confirm_password&&"password minLength 8 characters"}
        </div>
        <div className='form-group'>
          <label>role</label>
          <select
          name='role'
            className='form-control '
            ref={register}
          >
            <option value="recruiter">recruiter</option>
            <option value="applicant">applicant</option>
            </select>
        </div>
       

        <button type='submit' className='btn btn-primary'>
          Register
        </button>
        {' |  '}
        <Link to='signin' className='btn btn-primary' type='submit' name='action'>
          <i className='material-icons right'>Signin</i>
        </Link>
      </form>
    </div>
  );
};

export default Register;
