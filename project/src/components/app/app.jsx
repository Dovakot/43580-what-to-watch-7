import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import browserHistory from '../../browser-history';

import {AppRoute, PageType, AuthorizationStatus} from '../../const';

import Main from '../pages/main/main';
import SignIn from '../pages/sign-in/sign-in';
import MyList from '../pages/my-list/my-list';
import NotFound from '../pages/not-found/not-found';
import Pages from '../pages/pages';
import PageLoading from '../ui/page-loading/page-loading';

import PrivateRoute from '../private-route/private-route';

function App({authorizationStatus, isLoading}) {
  if (authorizationStatus === AuthorizationStatus.UNKNOWN || isLoading) {
    return (
      <PageLoading />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path={AppRoute.ROOT} exact>
          <Main />
        </Route>

        <Route path={AppRoute.LOGIN} exact>
          <SignIn />
        </Route>

        <Route path={AppRoute.FILM} exact>
          <Pages />
        </Route>

        <PrivateRoute path={AppRoute.REVIEW} exact>
          <Pages type={PageType.REVIEW} />
        </PrivateRoute>

        <PrivateRoute path={AppRoute.MY_LIST} exact>
          <MyList />
        </PrivateRoute>

        <Route path={AppRoute.PLAYER} exact>
          <Pages type={PageType.PLAYER} />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = ({isLoading, authorizationStatus}) => ({
  authorizationStatus,
  isLoading,
});

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export {App};
export default connect(mapStateToProps)(App);
