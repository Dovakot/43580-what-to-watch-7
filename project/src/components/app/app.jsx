import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {AppRoute, PageType} from '../../const';

import Main from '../pages/main/main';
import SignIn from '../pages/sign-in/sign-in';
import MyList from '../pages/my-list/my-list';
import NotFound from '../pages/not-found/not-found';
import Pages from '../pages/pages';

function App() {
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

export default App;
