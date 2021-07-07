import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {AppRoute} from '../../const';
import filmProp from '../../props/film-prop';

import Main from '../pages/main/main';
import SignIn from '../pages/sign-in/sign-in';
import MyList from '../pages/my-list/my-list';
import NotFound from '../pages/not-found/not-found';
import {PageType, getPage} from '../pages/pages';

function App({promoFilm, films, similarFilms, favoritesFilms}) {
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
          render={({match}) => getPage(match.params, similarFilms, PageType.FILM)}
          exact
        />

        <Route
          path={AppRoute.REVIEW}
          render={({match}) => getPage(match.params, films, PageType.REVIEW)}
          exact
        />

        <Route path={AppRoute.MY_LIST} exact>
          <MyList films={favoritesFilms} />
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

const mapStateToProps = (state) => ({
  promoFilm: state.promoFilm,
  films: state.films,
  similarFilms: state.similarFilms,
  favoritesFilms: state.favoritesFilms,
});

App.propTypes = {
  promoFilm: filmProp.isRequired,
  films: PropTypes.arrayOf(filmProp).isRequired,
  similarFilms: PropTypes.arrayOf(filmProp).isRequired,
  favoritesFilms: PropTypes.arrayOf(filmProp).isRequired,
};

export {App};
export default connect(mapStateToProps)(App);
