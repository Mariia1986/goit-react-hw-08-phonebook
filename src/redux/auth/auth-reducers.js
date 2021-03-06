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
   [loginSuccess]:(_,{payload})=>payload.user, 
   [logoutSuccess]:()=>initialUserState,
   [getCurrentUserSuccess]:(_,{payload})=>payload

})

const token =createReducer(null, {
    [registerSuccess]:(_,{payload})=>payload.token,
    [loginSuccess]:(_,{payload})=>payload.token,
    [logoutSuccess]:()=>null
})

const setError=(_, {payload})=>payload
const error =createReducer(null, {
    [registerError]: setError,
    [loginError]: setError,
    [logoutError]: setError,
    [getCurrentUserError]: setError
})

const isAuth=createReducer(false,{
    [getCurrentUserRequest]:()=>true,
    [registerSuccess]:()=>true,
    [loginSuccess]:()=>true,
    [getCurrentUserSuccess]:()=>true,
    [registerError]:()=>false,
    [loginError]:()=>false,
    [getCurrentUserError]:()=>false,
    [logoutSuccess]:()=>false,
})



export default combineReducers ({
    user,
    token,
    error,
    isAuth,
})