import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

import {AppRoute} from '../../const';
import {isCheckAuth} from '../../utils/utils';
import {getUser} from '../../store/reducers/user-data/selectors';

import PrivatePage from './private-page/private-page';

function PrivateRoute({children, path, exact}) {
  const {authorizationStatus} = useSelector(getUser);

  return (
    <Route path={path} exact={exact}>
      {isCheckAuth(authorizationStatus)
        ? <PrivatePage>{children}</PrivatePage>
        : <Redirect to={AppRoute.LOGIN} />}
    </Route>
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

export default PrivateRoute;
