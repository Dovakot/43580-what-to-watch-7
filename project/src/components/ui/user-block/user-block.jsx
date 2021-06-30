import React from 'react';
import {Link, useHistory} from 'react-router-dom';

import {AppRoute} from '../../../const';

function UserBlock() {
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
            src="img/avatar.jpg"
            alt="User avatar"
            width={63}
            height={63}
          />
        </div>
      </li>
      <li className="user-block__item">
        <Link className="user-block__link" to="/">Sign out</Link>
      </li>
    </ul>
  );
}

export default UserBlock;
