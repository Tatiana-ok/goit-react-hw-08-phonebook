import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth-actions';

const initialState = { name: "", email: "" };

const user = createReducer(initialState, {
    [authActions.registerSuccess]: (_, { payload }) => payload.user,
    [authActions.loginSuccess]: (_, { payload }) => payload.user,
    [authActions.logoutSuccess]: () => initialState,
    [authActions.getUserSuccess]: (_, {payload}) => payload,
});

const token = createReducer(null, {
    [authActions.registerSuccess]: (_, { payload }) => payload.token,
    [authActions.loginSuccess]: (_, { payload }) => payload.token,
    [authActions.logoutSuccess]: () => null
});

const error = createReducer(null, {
    [authActions.registerError]: (_, { payload }) => payload,
    [authActions.loginError]: (_, { payload }) => payload,
    [authActions.logoutError]: (_, { payload }) => payload,
    [authActions.getUserError]: (_, { payload }) => payload
});

const isAuthenticated = createReducer(false, {
    [authActions.registerSuccess]: () => true,
    [authActions.loginSuccess]: () => true,
    [authActions.getUserSuccess]: () => true,
    [authActions.registerError]: () => false,
    [authActions.loginError]: () => false,
    [authActions.getUserError]: () => false,
    [authActions.logoutSuccess]: () => false
});

export default combineReducers({
    user,
    isAuthenticated,
    token,
    error
});
