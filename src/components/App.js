import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import Login from './Login';
import PrivateRoute from '../routes/PrivateRoute';
import Home from './Home';
import NewPoll from '../components/Questions/NewPoll';
import LeaderBoard from '../components/LeaderBoard/LeaderBoard';
import QuestionDetail from '../components/Questions/QuestionDetail';
import LoadingBar from 'react-redux-loading-bar'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render () {
    return (
        <Router>
          <div className="app-container">
            <LoadingBar />
            <Switch>
              <Route path="/" exact component={Login} /> 
              <PrivateRoute exact path="/home" component={Home} />
              <PrivateRoute exact path="/add" component={NewPoll} />
              <PrivateRoute exact path="/leaderboard" component={LeaderBoard} />
              <PrivateRoute exact path="/question/:id" component={QuestionDetail} />

              {/* todo: Create 404 page and redirect to login */}
              <Route path="*" component={() => "404 page not found"} /> 
            </Switch>
          </div>
        </Router>
    )
  }
}

export default connect()(App);
