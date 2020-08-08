import React, { Fragment, useContext } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InterviewProcess from './components/interview/InterviewProcess';
import Navbar from './components/layouts/Navbar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './components/home/homePage';
import PageNotFound from './PageNotFound';
import Users from './components/user/Users';
import User from './components/user/User';
import UserProfile from './components/user/UserProfile'
import PositionsState from './context/positions/PositionsState';
import InterviewState from './context/interview/InterviewState';
import CreatePosition from './components/positions/CreatePosition';
import RecruiterDashboard from './components/positions/RecruiterDashboard';
import UserState from './context/user/UserState';
import Register from './components/login/Register';
import sign from './components/login/Sign';
import Alert from './components/layouts/Alert';
import AlertState from './context/alert/AlertState';
import UserContext from './context/user/userContext';
const App = () => {
  return (
    <Router>
      <PositionsState>
        <InterviewState>
          <UserState>
            <AlertState>
              <div>
                <Navbar />
                <Alert />
              <div className='container'>
                <Switch>
                <Route
                path='/users/:userId/jobs/:jobId/interviews/:interviewId'
                 render={(props)=> localStorage.getItem('token') ? <InterviewProcess {...props}/>:
                <Redirect to={{pathname:'/signin'}}/>  }
              />
                  <Route
                    exact path='/users'
                    render={(props) => (
                      <Fragment>
                        <Users />
                      </Fragment>
                    )}
                  />
                  <Route
                    exact path='/user/:id'
                    render={(props) => <User {...props} />}
                  />
                  <Route exact path='/signin' component={sign}></Route>
                  <Route exact path='/signup' component={Register} />
                  <Route exact path='/' component={HomePage}></Route>

                  <Route path='/addJob' component={CreatePosition}></Route>
                  <Route exact path='/recruiterPositions' component={RecruiterDashboard}></Route>
                  <Route exact path='/users/:userId/profile' component={UserProfile} ></Route>

                  <Route component={PageNotFound}></Route>
                </Switch>
              </div>
            </AlertState>
          </UserState>
        </InterviewState>
      </PositionsState>
    </Router>
  );
}

export default App;
