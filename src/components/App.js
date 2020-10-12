import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import NewPoll from '../components/NewPoll'
import LeaderBoard from './LeaderBoard';
import Home from './Home';
import Login from './Login';
import PrivateRoute from '../routes/PrivateRoute';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render () {
    return (
        <Router>
          <div className="app-container">
            <Switch>
              <Route path="/" exact component={Login} /> 
              <PrivateRoute exact path="/home" component={Home} />
              <PrivateRoute exact path="/new" component={NewPoll} />
              <PrivateRoute exact path="/leaderboard" component={LeaderBoard} />

              {/* todo: Create 404 page and redirect to login */}
              <Route path="*" component={() => "404 page not found"} /> 
            </Switch>
          </div>
        </Router>
    )
  }
}

export default connect()(App);
