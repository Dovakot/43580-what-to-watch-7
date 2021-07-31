import {toast} from 'react-toastify';

import {ApiRoute, AuthorizationStatus, MessageText} from '../../../const';
import {
  requireAuthorization,
  authorizationProcess,
  authorizationError,
  logout
} from '../../actions/user-actions/user-actions';

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.LOGIN)
    .then(({data}) => dispatch(requireAuthorization(AuthorizationStatus.AUTH, data)))
    .catch(() => !AuthorizationStatus.NO_AUTH && toast.error(MessageText.AUTH_ERROR))
);

const login = (user) => (dispatch, _getState, api) => (
  api.post(ApiRoute.LOGIN, user)
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(requireAuthorization(AuthorizationStatus.AUTH, data));
    })
    .catch(() => dispatch(authorizationError(true)))
    .finally(() => dispatch(authorizationProcess(false)))
);

const logoutAccount = () => (dispatch, _getState, api) => (
  api.delete(ApiRoute.LOGOUT)
    .then(() => {
      localStorage.removeItem('token');
      dispatch(logout());
    })
    .catch(() => toast.error(MessageText.FAILED_SIGNOUT))
    .finally(() => dispatch(authorizationProcess(false)))
);

export {
  checkAuth,
  login,
  logoutAccount
};
