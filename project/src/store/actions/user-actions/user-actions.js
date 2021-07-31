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

const authorizationProcess = createAction(ActionType.AUTHORIZATION_PROCESS, (isLoading) => ({
  payload: isLoading,
}));

const authorizationError = createAction(ActionType.AUTHORIZATION_ERROR, (isError) => ({
  payload: isError,
}));

const logout = createAction(ActionType.LOGOUT);

export {
  requireAuthorization,
  authorizationProcess,
  authorizationError,
  logout
};
