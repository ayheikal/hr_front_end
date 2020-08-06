import React from 'react';
import { Link } from 'react-router-dom';

class Register extends React.Component {

  constructor(props){
    super(props);
    this.state={
      fullname:'',
      email:'',
      password:'',
      role:'',
      errors: []
    }
  }
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
   handleSubmit=(e)=>{
     e.preventDefault()
    console.log(this.state)
  }
  render() {
    return (
      <form className={'w-50 '} style={{ margin: '20px' }} onSubmit={this.handleSubmit}>
       
        <div className={'form-group'}>
          <input
            type='text'
            className='form-control '
            
            placeholder={'FULL NAME'}
            onChange={this.handleChange}
            name='fullname'
          />
        </div>
       
        <div className='form-group '>
          <input
            type='email'
            className='form-control '
            name='email'
            aria-describedby='emailHelp'
            placeholder={'e-mail'}
            onChange={this.handleChange}
          />
          <small id='emailHelp' className='form-text text-muted'>
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className='form-group '>
          <input
            type='password'
            className='form-control'
            name='password'
            placeholder={'Password'}
            onChange={this.handleChange}
          />
        </div>
        <div className={'form-group'}>
          <select
          name='role'
            className='form-control '
            onChange={this.handleChange}
          >
            <option value="recruiter">recruiter</option>
            <option value="applicant">applicant</option>
            </select>
        </div>

        <button type='submit' className='btn btn-primary'>
          Register
        </button>
        {'|'}
        <Link to='signin' className='btn btn-primary' type='submit' name='action'>
          <i className='material-icons right'>Signin</i>
        </Link>
      </form>
    );
  }
}
export default Register;
