import React, { Fragment } from 'react';
import Positions from '../positions/Positions';
import Search from './Search';
import Pagination from './Pagination';
const HomePage = () => {
  return (
    <Fragment>
      <Search />
      <Positions />
      <Pagination numberOfPages={10}/>
    </Fragment>
  );
};
export default HomePage;
