import {combineReducers} from 'redux'
import {createReducer} from '@reduxjs/toolkit'
import {
    registerRequest,
    registerSuccess,
    registerError,
    loginSuccess,
    loginRequest,
    loginError,
    logoutSuccess,
    logoutRequest,
    logoutError,
    getCurrentUserSuccess,
    getCurrentUserRequest,
    getCurrentUserError
} from './auth-actions'


const initialUserState={name:null, email:null}

const user =createReducer(initialUserState, {
   [registerSuccess]:(_,{payload})=>payload.user, 
   [loginSuccess]:(_,{payload})=>payload.user 

})

const token =createReducer(null, {
    [registerSuccess]:(_,{payload})=>payload.token,
    [loginSuccess]:(_,{payload})=>payload.token
})

const error =createReducer(null, {
    [registerError]:(_, {payload})=>payload
})


export default combineReducers ({
    user,
    token,
    error,
})