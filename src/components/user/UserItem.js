import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ user }) => {
  // const { id, name, email, phone } = user;

  return (
    <div className='card text-center'>
      {/* <img
        className='round-img'
        src={avatar_url}
        style={{ width: '60px' }}
        alt='userItem'
      /> */}
      <h3>name</h3>

      <h3>email@test.com</h3>
      <h3>+201144560665</h3>
      <Link className='btn btn-dark btn-sm my-1' to={`/users/1/profile`}>
        more
      </Link>
    </div>
  );
};

export default UserItem;
