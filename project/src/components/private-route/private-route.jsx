import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

import {AppRoute} from '../../const';
import {isCheckAuth} from '../../utils/utils';

import PrivatePage from './private-page/private-page';

function PrivateRoute({children, path, exact, authorizationStatus}) {
  return (
    <Route path={path} exact={exact}>
      {isCheckAuth(authorizationStatus)
        ? <PrivatePage>{children}</PrivatePage>
        : <Redirect to={AppRoute.LOGIN} />}
    </Route>
  );
}

const mapStateToProps = ({authorizationStatus}) => ({
  authorizationStatus,
});

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  authorizationStatus: PropTypes.string.isRequired,
};

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
