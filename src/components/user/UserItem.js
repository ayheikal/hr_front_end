import React from 'react';

const UserItem = (props) => {
  const { name, email } = props.user;

  return (
    <div className='card text-center'>
      <img
        className='round-img'
        src={avatar_url}
        style={{ width: '60px' }}
        alt='userItem'
      />
      <h3>{name}</h3>
      {/* <Link className='btn btn-dark btn-sm my-1' to={`/user/${login}`}>
        
      </Link> */}
      <h3>{email}</h3>
    </div>
  );
};

export default UserItem;