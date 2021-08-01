import {createReducer} from '@reduxjs/toolkit';

import {AuthorizationStatus} from '../../../const';
import {adaptToClientUser} from '../../../services/adapters';
import {
  requireAuthorization,
  setAuthorizationProcess,
  setAuthorizationError,
  logout
} from '../../actions/user-actions/user-actions';

const initialState = {
  user: {},
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isAuthorizationProcess: false,
  isAuthorizationError: false,
};

const userData = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, {payload}) => {
      state.user = adaptToClientUser(payload.user);
      state.authorizationStatus = payload.status;
    })
    .addCase(setAuthorizationProcess, (state, {payload}) => {
      state.isAuthorizationProcess = payload;
    })
    .addCase(setAuthorizationError, (state, {payload}) => {
      state.isAuthorizationError = payload;
    })
    .addCase(logout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    });
});

export default userData;
