import React, { Fragment } from 'react';
import {Redirect} from 'react-router-dom'
import Positions from '../positions/Positions';
import Search from './Search';
import Pagination from './Pagination';
const HomePage = () => {
  return (
    <Fragment>
      {(localStorage.getItem('token')&& localStorage.getItem('role') === 'recruiter') ? (
          <Redirect to={{ pathname: '/recruiter/positions' }} />

      ):null}
      <Search />
      <Positions />
      <Pagination numberOfPages={10}/>
    </Fragment>
  );
};
export default HomePage;
