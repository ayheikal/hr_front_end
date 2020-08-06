import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

const guestLinks=(
  <>  <li className='nav-item'>
  <a className='nav-link' href='/signUp'>signUp</a>
  </li>
  <li className='nav-item'>
  <a className='nav-link' href='/signin'>signIn</a>
  </li>
  </>

)
  
  return (
    <nav
      className='navbar navbar-expand-md navbar-dark bg-dark'
      
    >
      <Link className='navbar-brand' to={'/home'}>
        HRBOT
      </Link>
     
      
        <ul className='navbar-nav '>
          <li className='nav-item active'>
            <Link className='nav-link' to='/home'>
              Home <span className='sr-only'>(current)</span>
            </Link>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/about'>
              About
            </a>
          </li>
          {guestLinks}
         
          
        </ul>
        
      
    </nav>
  );
};

export default Navbar;
