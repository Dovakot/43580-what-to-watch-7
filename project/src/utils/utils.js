import {AuthorizationStatus} from '../const';

const isCheckAuth = (status) => status === AuthorizationStatus.AUTH;

export {
  isCheckAuth
};
