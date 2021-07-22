import React from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {AppRoute, AuthorizationStatus} from '../../../../const';
import {ActionCreator} from '../../../../store/actions';
import {logout} from '../../../../store/api-actions';
import {userProp} from '../../../../props/user-prop';

function UserInfo({
  user: {avatar, name},
  logoutAccount,
}) {
  const history = useHistory();

  const onAvatarClick = (evt) => {
    evt.preventDefault();

    history.push(AppRoute.MY_LIST);
  };

  const onSignOutClick = (evt) => {
    evt.preventDefault();

    logoutAccount(AuthorizationStatus.PROCESS);
  };

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div
          className="user-block__avatar"
          onClick={onAvatarClick}
        >
          <img
            src={avatar}
            alt={name}
            width={63}
            height={63}
          />
        </div>
      </li>
      <li className="user-block__item">
        <a
          className="user-block__link"
          href="/"
          onClick={onSignOutClick}
        >
          Sign Out
        </a>
      </li>
    </ul>
  );
}

const mapStateToProps = ({user}) => ({
  user,
});

const mapDispatchToProps = (dispatch) => ({
  logoutAccount(status) {
    dispatch(ActionCreator.requireAuthorization(status));
    dispatch(logout());
  },
});

UserInfo.propTypes = {
  user: userProp,
  logoutAccount: PropTypes.func.isRequired,
};

export {UserInfo};
export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
