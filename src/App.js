import React, { Fragment, useContext } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InterviewProcess from './components/interview/InterviewProcess';
import Navbar from './components/layouts/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import HomePage from './components/home/homePage';
import PageNotFound from './PageNotFound';
import Users from './components/user/Users';
import User from './components/user/User';
import UserProfile from './components/user/UserProfile';
import PositionsState from './context/positions/PositionsState';
import InterviewState from './context/interview/InterviewState';
import CreatePosition from './components/positions/CreatePosition';
import UpdatePosition from './components/positions/UpdatePosition'
import RecruiterPositionOperations from './components/positions/RecruiterPositionOperations';
// import JobQuestionsOperations from './components/questions/JobQuestionsOperations'
import QuestionModelAnswersOperations from './components/answers/QuestionModelAnswersOperations'
import UserState from './context/user/UserState';
import Register from './components/login/Register';
import sign from './components/login/Sign';
import Alert from './components/layouts/Alert';
import AlertState from './context/alert/AlertState';

import SkillsOperations from './components/skills/SkillsOperations';
import CreateSkill from './components/skills/CreateSkill'
import UpdateSkill from './components/skills/UpdateSkill'

import QuesionsOperations from './components/questions/QuestionsOperations'
import CreateQuestion from './components/questions/CreateQuestion'
import UpdateQuestion from './components/questions/UpdateQuestion'

function App() {

  return (
    <Router>
      <PositionsState>
        <InterviewState>
          <UserState>
            <AlertState>
                <Navbar />
                <Alert />
                <div className='container '>
                  <Switch>
                    <Route
                      path='/users/:userId/jobs/:jobId/interviews/:interviewId'
                      render={(props) =>
                        localStorage.getItem('token') ? (
                          <InterviewProcess {...props} />
                        ) : (
                          <Redirect to={{ pathname: '/signin' }} />
                        )
                      }
                    />
                    <Route
                      exact
                      path='/users'
                      render={(props) => (
                        <Fragment>
                          <Users />
                        </Fragment>
                      )}
                    />
                    <Route
                      exact
                      path='/user/:id'
                      render={(props) => <User {...props} />}
                    />
                    <Route exact path='/signin' component={sign}></Route>
                    <Route exact path='/signup' component={Register} />
                    <Route exact path='/' component={HomePage}></Route>

                    <Route exact path='/recruiter/positions/create' component={CreatePosition}></Route>
                    <Route exact path='/recruiter/positions/:positionId/update' component={UpdatePosition}></Route>
                    {/* <Route exact path='/recruiter/positions/:positionsId/questions' component={JobQuestionsOperations}></Route> */}
                    <Route exact path='/recruiter/questions/:quesionId/modelAnswers' component={QuestionModelAnswersOperations}></Route>
                    <Route exact path='/recruiter/positions' component={RecruiterPositionOperations}></Route>
                    
                    <Route exact path='/admin/skills' component={SkillsOperations}></Route>
                    <Route exact path='/admin/skills/create' component={CreateSkill}></Route>
                    <Route exact path='/admin/skills/:skillId/update' component={UpdateSkill}></Route>
                    
                    <Route exact path='/admin/questions' component={QuesionsOperations}></Route>
                    <Route exact path='/admin/questions/create' component={CreateQuestion}></Route>
                    <Route exact path='/admin/questions/:questionId/update' component={UpdateQuestion}></Route>
                    
                    <Route
                      exact
                      path='/users/:userId/profile'
                      render={(props) => <UserProfile {...props} />}
                    ></Route>

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
