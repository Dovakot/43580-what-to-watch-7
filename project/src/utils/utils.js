import {AuthorizationStatus} from '../const';

const isCheckAuth = (status) => status === AuthorizationStatus.AUTH;
const isUserGuest = (status) => status === AuthorizationStatus.UNKNOWN;

export {
  isCheckAuth,
  isUserGuest
};
