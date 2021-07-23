import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {isCheckAuth, isAuthorizationProgress} from '../../../utils/utils';

import UserInfo from './user-info/user-info';
import LoginLink from './login-link/login-link';
import PageLoading from '../page-loading/page-loading';

function UserBlock({authorizationStatus}) {
  return (
    <>
      {isAuthorizationProgress(authorizationStatus) && <PageLoading />}
      {isCheckAuth(authorizationStatus) ? <UserInfo /> : <LoginLink />}
    </>
  );
}

const mapStateToProps = ({authorizationStatus}) => ({
  authorizationStatus,
});

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

export {UserBlock};
export default connect(mapStateToProps)(UserBlock);
