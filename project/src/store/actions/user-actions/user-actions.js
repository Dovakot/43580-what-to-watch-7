import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../actions';

const requireAuthorization = createAction(
  ActionType.REQUIRED_AUTHORIZATION, (status, user = {}) => ({
    payload: {
      status,
      user,
    },
  }),
);

const setAuthorizationProcess = createAction(ActionType.SET_AUTHORIZATION_PROCESS, (isLoading) => ({
  payload: isLoading,
}));

const setAuthorizationError = createAction(ActionType.SET_AUTHORIZATION_ERROR, (isError) => ({
  payload: isError,
}));

const logout = createAction(ActionType.LOGOUT);

export {
  requireAuthorization,
  setAuthorizationProcess,
  setAuthorizationError,
  logout
};
