import {createReducer} from '@reduxjs/toolkit';

import {AuthorizationStatus} from '../../../const';
import {adaptToClientUser} from '../../../services/adapters';
import {
  requireAuthorization,
  authorizationProcess,
  authorizationError,
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
    .addCase(authorizationProcess, (state, {payload}) => {
      state.isAuthorizationProcess = payload;
    })
    .addCase(authorizationError, (state, {payload}) => {
      state.isAuthorizationError = payload;
    })
    .addCase(logout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    });
});

export default userData;
