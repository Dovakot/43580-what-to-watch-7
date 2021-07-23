import React from 'react';
import {Link} from 'react-router-dom';

import {AppRoute} from '../../../../const';

function LoginLink() {
  return (
    <div className="user-block">
      <Link className="user-block__link" to={AppRoute.LOGIN}>Sign in</Link>
    </div>
  );
}

export default LoginLink;
