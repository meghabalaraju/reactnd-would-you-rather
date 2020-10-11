import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleSetAuthedUser } from '../actions/authedUser'
import { handleQuestions } from '../actions/questions'

class Login extends Component {

    state = {
        userID: ''
    }


    /**
     * @description - onChange event to grab userId for slected user
     * @param {event} e 
     */

    handleUserSelection = (e) => {
        e.preventDefault()

        const userId = e.target.value

        this.setState(() => ({
            userID: userId
        }))
    }

    /**
     * @description - Retrive userId for selected user from current user, dispatches event to set auther Id
     * @param {event} e 
     */
    handleLoggedUser = (e) => {
        e.preventDefault()

        const { userID } = this.state
        const { dispatch } = this.props

        dispatch(handleSetAuthedUser(userID))
        dispatch(handleQuestions())


        if (this.props.location.state) {
            const { from } = this.props.location.state
            this.props.history.push(from)
        } else {
            this.props.history.push("/home")
        }

    }

    render() {
        const { users } = this.props;
        const { userID } = this.state;

        return (

            <div className='wrapper'>
                <div className='log-header'>
                    <h3 className='log-header-font'>Welcome to would you ratherapp!</h3>
                    <p>Please sign in to continue</p>
                </div>
            
                <div className='login'>
                    <select 
                        className='login-select' 
                        value={userID}
                        onChange={(e) => this.handleUserSelection(e)}
                    >
                        <option value='' hidden >Select User</option>
                        {users.map((key, i) => (
                            <option value={key.id} key={i} >{key.name}</option>
                        ))}
                    </select>
                    <button 
                        className='btn btn-select'
                        type='submit'
                        disabled={userID === ''}
                        onClick={(e) => this.handleLoggedUser(e)}>Sign in
                    </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({users}) {
    const userIds = Object.keys(users)

    return {
        users: userIds.map((id) => users[id])
    }
}

export default connect(mapStateToProps)(Login)