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
import UpdatePosition from './components/positions/UpdatePosition';
import RecruiterPositionOperations from './components/positions/RecruiterPositionOperations';
import UserState from './context/user/UserState';
import Register from './components/login/Register';
import Sign from './components/login/Sign';
import Alert from './components/layouts/Alert';
import AlertState from './context/alert/AlertState';

import SkillsOperations from './components/skills/SkillsOperations';
import CreateSkill from './components/skills/CreateSkill';
import UpdateSkill from './components/skills/UpdateSkill';

import QuesionsOperations from './components/questions/QuestionsOperations';
import CreateQuestion from './components/questions/CreateQuestion';
import UpdateQuestion from './components/questions/UpdateQuestion';

import ModelAnswersOperations from './components/modelAnswers/ModelAnswersOperations';
import CreateModelAnswer from './components/modelAnswers/CreateModelAnswer';
import UpdateModelAnswer from './components/modelAnswers/UpdateModelAnswer';
import Timer from './components/interview/Timer';
import AdminState from './context/admin/AdminState';
import RecruiterState from './context/recruiter/RecruiterState';
import { Try } from './components/try';

import RecruiterInterviews from './components/Recruiter/RecruiterInterviews'
import InterviewReport from './components/Recruiter/InterviewReport'

function App() {
  return (
    <Router>
      <PositionsState>
        <InterviewState>
          <UserState>
            <AlertState>
              <AdminState>
                <RecruiterState>
                  <Navbar />
                  <Alert />
                  <Switch>
                    <Route
                      exact
                      path='/users/:userId/jobs/:jobId/interviews/:interviewId'
                      render={(props) =>
                        localStorage.getItem('token') &&
                        localStorage.getItem('role') === 'applicant' ? (
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

                    <Route
                      exact path='/signin'
                      render={(props) =>
                        (localStorage.getItem('token') ) ? (
                          <Redirect to={{ pathname: '/' }} />
                          
                        ):(
                          <Sign {...props} />
                        )
                      }
                    ></Route>

                    <Route
                      exact path='/signup'
                      render={(props) =>
                        (localStorage.getItem('token') ) ? (
                          <Redirect to={{ pathname: '/' }} />
                          
                        ):(
                          <Register {...props} />
                        )
                      }
                    ></Route>
                  


                    <Route
                      exact path='/'
                      render={(props) =>
                        (localStorage.getItem('token')&& localStorage.getItem('role') === 'admin') ? (
                          <Redirect to={{ pathname: '/admin/skills' }} />
                        ):(
                          <HomePage {...props} />
                        )
                      }
                      
                    ></Route>

                    
                    {/* recruiter paths */}
                    <Route
                      exact
                      path='/recruiter/positions'
                      component={RecruiterPositionOperations}
                    ></Route>

                    <Route
                      exact
                      path='/recruiter/positions/create'
                      component={CreatePosition}
                    ></Route>
                    <Route
                      exact
                      path='/recruiter/positions/:positionId/update'
                      component={UpdatePosition}
                    ></Route>
                    <Route exact path="/recruiter/jobs/:jobId/interviews" component={RecruiterInterviews}></Route>
                    <Route exact path="/recruiter/interviews/:interviewId/report" component={InterviewReport} ></Route>




                    <Route
                      exact path='/admin/skills'
                      render={(props) =>
                        (localStorage.getItem('token') && localStorage.getItem('role') === 'admin') ? (
                          <SkillsOperations {...props} />
                        ):(
                          <Redirect to={{ pathname: '/signin' }} />
                        )
                      }
                    ></Route>

                    <Route
                      exact path='/admin/skills/create'
                      render={(props) =>
                        (localStorage.getItem('token') && localStorage.getItem('role') === 'admin') ? (
                          <CreateSkill {...props} />
                        ):(
                          <Redirect to={{ pathname: '/signin' }} />
                        )
                      }
                    ></Route>


                     <Route
                      exact path='/admin/skills/:skillId/update'
                      render={(props) =>
                        (localStorage.getItem('token') && localStorage.getItem('role') === 'admin') ? (
                          <UpdateSkill {...props} />
                        ):(
                          <Redirect to={{ pathname: '/signin' }} />
                        )
                      }
                    ></Route>


                     <Route
                      exact path='/admin/skills/:skillId/questions'
                      render={(props) =>
                        (localStorage.getItem('token') && localStorage.getItem('role') === 'admin') ? (
                          <QuesionsOperations {...props} />
                        ):(
                          <Redirect to={{ pathname: '/signin' }} />
                        )
                      }
                    ></Route>

                    <Route
                      exact path='/admin/questions/create'
                      render={(props) =>
                        (localStorage.getItem('token') && localStorage.getItem('role') === 'admin') ? (
                          <CreateQuestion {...props} />
                        ):(
                          <Redirect to={{ pathname: '/signin' }} />
                        )
                      }
                    ></Route>

                    <Route
                      exact path='/admin/skills/:skillId/questions/:questionId/update'
                      render={(props) =>
                        (localStorage.getItem('token') && localStorage.getItem('role') === 'admin') ? (
                          <UpdateQuestion {...props} />
                        ):(
                          <Redirect to={{ pathname: '/signin' }} />
                        )
                      }
                    ></Route>

                    <Route
                      exact path='/admin/questions/:questionId/answers'
                      render={(props) =>
                        (localStorage.getItem('token') && localStorage.getItem('role') === 'admin') ? (
                          <ModelAnswersOperations {...props} />
                        ):(
                          <Redirect to={{ pathname: '/signin' }} />
                        )
                      }
                    ></Route>


                    <Route
                      exact path='/admin/questions/:questionId/answers/create'
                      render={(props) =>
                        (localStorage.getItem('token') && localStorage.getItem('role') === 'admin') ? (
                          <CreateModelAnswer {...props} />
                        ):(
                          <Redirect to={{ pathname: '/signin' }} />
                        )
                      }
                    ></Route>


                    <Route
                      exact path='/admin/questions/:questionId/answers/:answerId/update'
                      render={(props) =>
                        (localStorage.getItem('token') && localStorage.getItem('role') === 'admin') ? (
                          <UpdateModelAnswer {...props} />
                        ):(
                          <Redirect to={{ pathname: '/signin' }} />
                        )
                      }
                    ></Route>

                    <Route
                      exact
                      path='/users/:userId/profile'
                      render={(props) =>
                        localStorage.getItem('token') &&
                        localStorage.getItem('role') === 'applicant' ? (
                          <UserProfile {...props} />
                        ) : (
                          <Redirect to={{ pathname: '/signin' }} />
                        )
                      }
                    ></Route>

                    <Route component={PageNotFound}></Route>
                  </Switch>
                  </RecruiterState>
              </AdminState>
            </AlertState>
          </UserState>
        </InterviewState>
      </PositionsState>
    </Router>
  );
}

export default App;
