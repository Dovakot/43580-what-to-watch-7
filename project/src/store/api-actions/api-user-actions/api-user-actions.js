import {toast} from 'react-toastify';

import {ApiRoute, AppRoute, AuthorizationStatus, MessageText} from '../../../const';
import {redirect} from '../../actions/actions';
import {
  requireAuthorization,
  setAuthorizationProcess,
  setAuthorizationError,
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
      dispatch(redirect(AppRoute.ROOT));
    })
    .catch(() => dispatch(setAuthorizationError(true)))
    .finally(() => dispatch(setAuthorizationProcess(false)))
);

const logoutAccount = () => (dispatch, _getState, api) => (
  api.delete(ApiRoute.LOGOUT)
    .then(() => {
      localStorage.removeItem('token');
      dispatch(logout());
    })
    .catch(() => toast.error(MessageText.FAILED_SIGNOUT))
    .finally(() => dispatch(setAuthorizationProcess(false)))
);

export {
  checkAuth,
  login,
  logoutAccount
};
