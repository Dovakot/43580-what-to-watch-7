import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {isCheckAuth} from '../../../utils/utils';

import UserInfo from './user-info/user-info';
import LoginLink from './login-link/login-link';

function UserBlock({authorizationStatus}) {
  return (
    isCheckAuth(authorizationStatus) ? <UserInfo /> : <LoginLink />
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
