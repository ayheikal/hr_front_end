import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InterviewProcess from './components/interview/InterviewProcess';
import Navbar from './components/layouts/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/home/homePage';
import PageNotFound from './PageNotFound';
import SignIn from './components/login/SignIn';
import Login from './components/login/Login';
import PositionsState from './context/positions/PositionsState';
function App() {
  return (
    <Router>
      <PositionsState>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route path='/signin' component={SignIn}></Route>
              <Route path='/signup' component={Login} />
              <Route exact path='/home' component={HomePage}></Route>
              <Route
                path='/:userId/:jobId/interview/:interviewId/'
                component={InterviewProcess}
              />
              <Route component={PageNotFound}></Route>
            </Switch>
          </div>
        </div>
      </PositionsState>
    </Router>
  );
}

export default App;
