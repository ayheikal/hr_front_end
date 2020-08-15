import React from 'react';
import profileImage from './../../images/profile.png'
const UserInfo = ({ user }) => {
  return (
    <div className='user-bio'>
      <div className='user-photo'>
        <img
          className='user-photo img-rounded img-responsive'
          alt={user.name}
          src={profileImage}
        />
      </div>
      <div className='user-info'>
        {/* <!-- role --> */}
        <small className='role'>Job Seeker</small>
        <hr />

        <div>
          {/* <!-- email --> */}
          <small>
            <i className='fas fa-envelope'>&nbsp;</i>
          </small>
          {user.email}
          <br />
          {/* <!-- CV --> */}
          <small>
            <i className='fas fa-file-pdf'>&nbsp;</i>
          </small>
          <a href='#'>Resume</a>
          <br />
          {/* <!-- joined at--> */}
          <small>
            <i className='fas fa-calendar'>&nbsp;</i>joined at :{' '}
            {user.created_at}
            &nbsp;
          </small>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
