import React from 'react';
import {useSelector} from 'react-redux';

import {isCheckAuth} from '../../../utils/utils';
import {getUser} from '../../../store/reducers/user-data/selectors';

import UserInfo from './user-info/user-info';
import LoginLink from './login-link/login-link';
import Spinner from '../loading/spinner/spinner';

function UserBlock() {
  const {authorizationStatus, isAuthorizationProcess} = useSelector(getUser);

  return (
    <>
      {isAuthorizationProcess && <Spinner />}
      {isCheckAuth(authorizationStatus) ? <UserInfo /> : <LoginLink />}
    </>
  );
}

export default UserBlock;
