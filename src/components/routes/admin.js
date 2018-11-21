import React, {Component} from 'react'
import AddUserForm from '../admin/add-user-form'
import {createUser} from '../../ducks/users'
import connect from "react-redux/es/connect/connect";

class AdminPage extends Component {
    static propTypes = {}

    render() {
        return (
            <div>
                <h1>Admin page</h1>
                <AddUserForm onSubmit={this.handleAddUser}/>
            </div>

        )
    }

    handleAddUser = (email, firstName, lastName) => this.props.createUser(email, firstName, lastName)
}

export default connect(null, {createUser })(AdminPage)