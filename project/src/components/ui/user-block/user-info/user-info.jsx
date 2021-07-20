import React from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {AppRoute} from '../../../../const';
import {logout} from '../../../../store/api-actions';
import userProp from '../../../../props/user-prop';

function UserInfo({
  user: {avatar, name},
  onLinkClick,
}) {
  const history = useHistory();

  const onAvatarClick = (evt) => {
    evt.preventDefault();

    history.push(AppRoute.MY_LIST);
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
          onClick={onLinkClick}
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
  onLinkClick() {
    dispatch(logout());
  },
});

UserInfo.propTypes = {
  user: userProp,
  onLinkClick: PropTypes.func.isRequired,
};

export {UserInfo};
export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
