import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InterviewProcess from './components/interview/InterviewProcess';
import Navbar from './components/layouts/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/home/homePage';
import PageNotFound from './PageNotFound';
// import SignIn from './components/login/SignIn';
// import Login from './components/login/Login';
import PositionsState from './context/positions/PositionsState';
import InterviewState from './context/interview/InterviewState';
import CreatePosition from './components/positions/CreatePosition';
import RecruiterDashboard from './components/positions/RecruiterDashboard';
import UserState from './context/user/UserState';
import Register from './components/login/Register';
import sign from './components/login/Sign';
function App() {
  
  return (
    <Router>
      <PositionsState>
        <InterviewState>
          <UserState>
          <div >
            <Navbar />
            <div className='container'>
              <Switch>
                <Route path='/signin' component={sign}></Route>
                <Route path='/signup' component={Register} />
                <Route exact path='/' component={HomePage} ></Route>
                <Route
                  path='/:userId/:jobId/interview/:interviewId/'
                  component={InterviewProcess}
                />
                <Route path='/addJob' component={CreatePosition}></Route>
                <Route
                  path='/recruiterPositions'
                  component={RecruiterDashboard}
                ></Route>
                <Route component={PageNotFound}></Route>
              </Switch>
            </div>
          </div>
          </UserState>
        </InterviewState>
      </PositionsState>
    </Router>
  );
}

export default App;
