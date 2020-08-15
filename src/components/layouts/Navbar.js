import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/user/userContext';
import logo from './../../images/logo.png';

const Navbar = () => {
  const userContext = useContext(UserContext);
  let role = 'guest';
  const authed = userContext.isAuthenticated();
  if (authed) {
    role = localStorage.getItem('role');
  }

  const guestLinks = (
    <>
      <li>
        <a className='nav-link' href='/signUp'>
          Register
        </a>
      </li>
      <li>
        <a className='nav-link' href='/signin'>
          Login
        </a>
      </li>
    </>
  );
  const applicantLinks = (
    <>
      <li>
        <a
          className='nav-link'
          href={`/users/${localStorage.getItem('userId')}/profile`}
        >
          {localStorage.getItem('name')}
        </a>
      </li>
      <li>
        <a onClick={() => userContext.logOut()} className='nav-link' href='/'>
          logOut
        </a>
      </li>
    </>
  );

  const recruiterLinks = (
    <>
      <li>
        <a className='nav-link' href='/recruiter/positions'>
          positions
        </a>
      </li>
      <li>
        <a onClick={() => userContext.logOut()} className='nav-link' href='/'>
          logOut
        </a>
      </li>
    </>
  );

  const adminLinks = (
    <>
      <li>
        <a className='nav-link' href='/admin/skills'>
          skills
        </a>
      </li>
      <li>
        <a className='nav-link' href='/admin/questions'>
          Quesetions
        </a>
      </li>
      <li>
        <a onClick={() => userContext.logOut()} className='nav-link' href='/'>
          logOut
        </a>
      </li>
    </>
  );

  let navLinks = null;

  if (!authed) {
    navLinks = guestLinks;
  } else if (role === 'applicant') {
    navLinks = applicantLinks;
  } else if (role === 'recruiter') {
    navLinks = recruiterLinks;
  } else {
    navLinks = adminLinks;
  }

  return (
    <header>
      <Link to='/'>
        <img src={logo} alt='logo' className='logo' />
      </Link>
      <nav>
        <ul className='nav__links'>{navLinks}</ul>
      </nav>
    </header>
  );
};

export default Navbar;
