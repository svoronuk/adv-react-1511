import {appName} from '../config'
import {Record} from 'immutable'
import * as api from '../api'

/**
 * Constants
 * */
export const moduleName = 'auth'
const prefix = `${appName}/${moduleName}`

export const SIGN_IN_SUCCESS = `${prefix}/SIGN_IN_SUCCESS`
export const SIGN_UP_SUCCESS = `${prefix}/SIGN_UP_SUCCESS`
export const SIGN_OUT = `${prefix}/SIGN_OUT`

/**
 * Reducer
 * */
export const ReducerRecord = Record({
    user: null,
})

export default function reducer(state = new ReducerRecord(), action) {
    const {type, payload} = action

    switch (type) {
        case SIGN_IN_SUCCESS:
        case SIGN_UP_SUCCESS:
            return state.set('user', payload.user)
        case SIGN_OUT:
            return state.set('user', null)
        default:
            return state
    }
}

/**
 * Selectors
 * */

/**
 * Init logic
 */
api.stateChanged(user => window.store.dispatch({
    type: SIGN_IN_SUCCESS,
    payload: { user }
}))

/**
 * Action Creators
 * */
export function signIn(email, password) {
    return dispatch =>
        api.signIn(email, password, user => dispatch({
            type: SIGN_IN_SUCCESS,
            payload: { user }
        }))
}


export function signUp(email, password) {
    return dispatch =>
        api.createUser(email, password, user => dispatch({
            type: SIGN_UP_SUCCESS,
            payload: { user }
        }))
}