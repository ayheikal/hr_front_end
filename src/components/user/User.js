import React, { Fragment, useContext, useEffect } from 'react';
import Spinner from '../layouts/Spinner';
import { Link } from 'react-router-dom';
// import Repos from '../repos/Repos';
import UserContext from '../../context/user/userContext';

const User = ({ match }) => {
  console.log('match: ', match.params.id);
  const userContext = useContext(UserContext);
  useEffect(() => {
    userContext.getUserInfo(match.params.id);
    //eslint-disable-next-line
  }, []);

  const { name, email, bio } = userContext.user;
  const { loading } = userContext.loading;

  if (loading) return <Spinner />;
  return (
    <Fragment>
      {console.log('user: ', userContext.user[0])}
      {/* <Link to='/' className='btn btn-light'>
        back to search
      </Link>
      Hireable?{' '}
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )} */}
      <div className='card grid-2'>
        <div className='all-center'>
          {/* <img
            src={avatar_url}
            alt=''
            className='round-img'
            style={{ width: '150px' }}
          /> */}
          <h1>{name}</h1>
          {/* <p>location: {location}</p> */}
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          {/* <a href={html_url} className='btn btn-dark my-1'>
            visit Github profile
          </a> */}
          <ul>
            <li>
              {name && (
                <Fragment>
                  <strong>Username:</strong>
                  {name}
                </Fragment>
              )}
            </li>
          </ul>
          <ul>
            {/* <li>
              {company && (
                <Fragment>
                  <strong>Company:</strong>
                  {company}
                </Fragment>
              )}
            </li> */}
          </ul>
          <ul>
            {/* <li>
              {blog && (
                <Fragment>
                  <strong>Website:</strong>
                  <a href={blog}>{blog}</a>
                </Fragment>
              )}
            </li> */}
          </ul>
        </div>
      </div>
      {/* <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-light'>Public Repos: {public_repos}</div>
        <div className='badge badge-dark'>Public Gists: {public_gists}</div>
      </div> 
       <Repos repos={githubContext.repos}></Repos> */}
    </Fragment>
  );
};

export default User;
