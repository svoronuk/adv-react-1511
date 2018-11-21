import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'
import ErrorField from '../common/error-field'
import emailValidator from "email-validator";

class AddUserForm extends Component {

    handleSubmit = e => {
        const {handleSubmit, reset} = this.props
        handleSubmit(e)
        reset()
    }

    render() {
        return (
            <div>
                <h1>Add new user</h1>
                <form onSubmit={this.handleSubmit}>
                        <Field name='email' label='Email:' component={ErrorField} />
                        <Field name='firstName' label='First Name:' component={ErrorField}/>
                        <Field name='lastName' label='Last Name:' component={ErrorField}/>
                    <button >Add user</button>
                </form>
            </div>
        )
    }
}

const validate = ({ email, firstName, lastName }) => {
    const errors = {}

    if (!email) errors.email = 'email is a required field'
    else if (!emailValidator.validate(email)) errors.email = 'incorrect email'

    if (!firstName) errors.firstName = 'First name is a required field'

    if (!lastName) errors.lastName = 'Last name is a required field'

    return errors
}


export default reduxForm({
    form: 'addUser',
    validate
})(AddUserForm)