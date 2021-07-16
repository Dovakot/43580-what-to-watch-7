import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {AppRoute, PageType} from '../../const';

import Main from '../pages/main/main';
import SignIn from '../pages/sign-in/sign-in';
import MyList from '../pages/my-list/my-list';
import NotFound from '../pages/not-found/not-found';
import Pages from '../pages/pages';
import PageLoading from '../ui/page-loading/page-loading';

function App({isDataLoaded}) {
  if (!isDataLoaded) {
    return (
      <PageLoading />
    );
  }

  return (
    <BrowserRouter>
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

        <Route path={AppRoute.REVIEW} exact>
          <Pages type={PageType.REVIEW} />
        </Route>

        <Route path={AppRoute.MY_LIST} exact>
          <MyList />
        </Route>

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

const mapStateToProps = ({isDataLoaded}) => ({
  isDataLoaded,
});

App.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,
};

export {App};
export default connect(mapStateToProps)(App);
