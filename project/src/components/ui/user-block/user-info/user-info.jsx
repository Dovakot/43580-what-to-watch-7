import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {AppRoute} from '../../../../const';
import {logoutAccount} from '../../../../store/api-actions/api-user-actions/api-user-actions';
import {authorizationProcess} from '../../../../store/actions/user-actions/user-actions';
import {getUser} from '../../../../store/reducers/user-data/selectors';

const AVATAR_DEFAULT = 'img/avatar.jpg';

function UserInfo() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {name, avatar} = useSelector(getUser).user;

  const onAvatarClick = (evt) => {
    evt.preventDefault();

    history.push(AppRoute.MY_LIST);
  };

  const onSignOutClick = (evt) => {
    evt.preventDefault();

    dispatch(authorizationProcess(true));
    dispatch(logoutAccount());
  };

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div
          className="user-block__avatar"
          onClick={onAvatarClick}
        >
          <img
            src={avatar || AVATAR_DEFAULT}
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

export default UserInfo;
