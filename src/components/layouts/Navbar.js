import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/user/userContext';
const Navbar = () => {
  const userContext = useContext(UserContext);
  let role = 'guest'
  const authed = userContext.isAuthenticated();
  if(authed){
    role = localStorage.getItem('role')
  }

  const guestLinks = (
    <>
      <li className='nav-item'>
        <a className='nav-link' href='/signUp'>
          signUp
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='/signin'>
          signIn
        </a>
      </li>
    </>
  );
  const applicantLinks = (
    <>
      <li className='nav-item'>
        <a
          className='nav-link'
          href={`/users/${localStorage.getItem('userId')}/profile`}
        >
          Profile
        </a>
      </li>
      <li className='nav-item'>
        <a onClick={() => userContext.logOut()} className='nav-link' href='/'>
          logOut
        </a>
      </li>
    </>
  );

  const recruiterLinks = (
    <>
      <li className='nav-item'>
        <a className='nav-link' href='/recruiter/positions'>
          positions
        </a>
      </li>
      <li className='nav-item'>
        <a onClick={() => userContext.logOut()} className='nav-link' href='/'>
          logOut
        </a>
      </li>
    </>
  )

  let navLinks = null

  if(!authed){
    navLinks = guestLinks
  }else if( role === 'applicant'){
    navLinks = applicantLinks
  }else{
    navLinks = recruiterLinks
  }

  return (
    <div className='container'>
      <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
        <Link className='navbar-brand' to={'/'}>
          HRBOT
        </Link>


    <div className= "container">
    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
      <Link className='navbar-brand' to={'/'}>
        HRBOT
      </Link>

      <ul className='navbar-nav '>
        <li className='nav-item active'>
          <Link className='nav-link' to='/'>
            Home <span className='sr-only'>(current)</span>
          </Link>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/about'>
            About
          </a>
        </li>
          {navLinks}
      </ul>
    </nav>

    </div>
  );
};

export default Navbar;
