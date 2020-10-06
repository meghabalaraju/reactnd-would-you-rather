import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LeaderBoard from './LeaderBoard';
// import NewPoll from './NewPoll';
// import Wrapper from './Login/Wrapper';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render () {
    return (
        // <Wrapper/>
        // <NewPoll />
        <LeaderBoard />
    )
  }
}

export default connect()(App);
