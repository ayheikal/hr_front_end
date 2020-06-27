import React, { Fragment } from 'react';
import Positions from '../positions/Positions';
import Search from './Search';
const HomePage = () => {
  return (
    <Fragment>
      <Search />
      <Positions />
    </Fragment>
  );
};
export default HomePage;
