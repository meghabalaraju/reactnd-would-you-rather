import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { handleLogout } from "../../actions/authedUser";

class Nav extends Component {
  /**
   * @description - Redirects path to home before dispatching event to carryout logout steps
   * @param {event} e
   */
  handleAuthentication = (e) => {
    const { dispatch, authedUser } = this.props;

    this.props.history.push("/");
    dispatch(handleLogout(authedUser));
  };

  render() {
    return (
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/home" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/add" exact activeClassName="active">
              New Poll
            </NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard">Leader Board</NavLink>
          </li>
          <li>Hello, {this.props.username}</li>

          <li>
            <button
              className="btn-logout"
              onClick={(e) => this.handleAuthentication(e)}
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  const username = users[authedUser].name;
  return {
    username,
    authedUser,
  };
}

export default withRouter(connect(mapStateToProps)(Nav));
