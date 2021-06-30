import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {AppRoute} from '../../const';
import filmProp from '../../props/film-prop';

import Main from '../pages/main/main';
import SignIn from '../pages/sign-in/sign-in';
import MyList from '../pages/my-list/my-list';
import NotFound from '../pages/not-found/not-found';
import {PageType, getPage} from '../pages/pages';

function App({promoFilm, films}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.ROOT} exact>
          <Main
            promoFilm={promoFilm}
            films={films}
          />
        </Route>

        <Route path={AppRoute.LOGIN} exact>
          <SignIn />
        </Route>

        <Route
          path={AppRoute.FILM}
          render={({match}) => getPage(match.params, films, PageType.FILM)}
          exact
        />

        <Route
          path={AppRoute.REVIEW}
          render={({match}) => getPage(match.params, films, PageType.REVIEW)}
          exact
        />

        <Route path={AppRoute.MY_LIST} exact>
          <MyList films={films} />
        </Route>

        <Route
          path={AppRoute.PLAYER}
          render={({match}) => getPage(match.params, films, PageType.PLAYER)}
          exact
        />

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  promoFilm: filmProp.isRequired,
  films: PropTypes.arrayOf(filmProp).isRequired,
};

export default App;
