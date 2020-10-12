import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

export const  PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
    
    <Route {...rest} render={(props) => (
        isAuthenticated === true 
            ? <Component {...props}/>
            : <Redirect to={{
                pathname: '/',
                state: { 
                    from : props.location 
                }    // user will be redirected to where he came from (path)
            }} />

    )} />
)

function mapStateToProps ( { authedUser } ) {
    return {
        isAuthenticated: authedUser !== null
    }
}


export default connect(mapStateToProps)(PrivateRoute)