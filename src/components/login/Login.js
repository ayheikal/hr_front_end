import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <form className={'w-50 '} style={{ margin: '20px' }}>
        <div className='form-group  '>
          <input
            type='text'
            className='form-control '
            id='first_name '
            placeholder={'First Name'}
          />
        </div>
        <div className={'form-group'}>
          <input
            type='text'
            className='form-control '
            id='last_name '
            placeholder={'Last Name'}
          />
        </div>
        <div className={'form-group'}>
          <input
            type='text'
            className='form-control '
            id='user_name '
            placeholder={'Username'}
          />
        </div>
        <div className='form-group '>
          <input
            type='email'
            className='form-control '
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            placeholder={'e-mail'}
          />
          <small id='emailHelp' className='form-text text-muted'>
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className='form-group '>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            placeholder={'Password'}
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
        {'|'}
        <Link to='signin' class='btn btn-primary' type='submit' name='action'>
          <i class='material-icons right'>Signin</i>
        </Link>
      </form>
    );
  }
}
export default Login;
