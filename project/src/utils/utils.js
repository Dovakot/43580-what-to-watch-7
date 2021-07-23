import {AuthorizationStatus} from '../const';

const isAuthorizationProgress = (status) => status === AuthorizationStatus.PROCESS;
const isCheckAuth = (status) => status === AuthorizationStatus.AUTH;

export {
  isCheckAuth,
  isAuthorizationProgress
};
