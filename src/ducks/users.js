import {appName} from '../config'
import {List} from 'immutable'

/**
 * Constants
 * */
export const moduleName = 'users'
const prefix = `${appName}/${moduleName}`

export const ADD_USER = `${prefix}/ADD_USER`

/**
 * Reducer
 * */

export default function reducer(state = new List([]), action) {
    const {type, payload} = action

    switch (type) {
        case ADD_USER:
            const {email, firstName, lastName} = payload;
            const user = {
                email,
                firstName,
                lastName
            };
            return state.push(user)
        default:
            return state
    }
}

/**
 * Action Creators
 * */
export function createUser(user){
    return dispatch => dispatch( {
        type: ADD_USER,
        payload: { ...user }
    })
}