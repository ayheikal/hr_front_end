import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ user }) => {
  const { id, name, email, phone } = user;

  return (
    <div className='card text-center'>
      {/* <img
        className='round-img'
        src={avatar_url}
        style={{ width: '60px' }}
        alt='userItem'
      /> */}
      <h3>name:{name}</h3>
      <h3>mail:{email}</h3>
      <h3>phone:{phone}</h3>
      <Link className='btn btn-dark btn-sm my-1' to={`/users/${id}/profile`}>
        more
      </Link>
    </div>
  );
};

export default UserItem;
