import React, { Component, Fragment } from 'react'
import { NavLink, Route, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import AdminPage from './components/routes/admin'
import AuthPage from './components/routes/auth'

class App extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    {this.props.isLogged && <NavLink to = "/admin" activeStyle={{ color: 'red' }}>Admin</NavLink>}
                </div>
                <div>
                    <NavLink to = "/auth/sign-in" activeStyle={{ color: 'red' }}>Sign In</NavLink>
                </div>
                <div>
                    <NavLink to = "/auth/sign-up" activeStyle={{ color: 'red' }}>Sign Up</NavLink>
                </div>
                <div>
                    <Route path = "/admin" component = {AdminPage}/>
                    <Route path = "/auth" component = {AuthPage}/>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(connect(state  => ({isLogged: !!state.auth.get('user')}), null)(App))