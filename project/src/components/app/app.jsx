import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import {
  AppRoute
} from '../../const';

import filmProp from '../../props/film-prop';

import Main from '../pages/main/main';
import SignIn from '../pages/sign-in/sign-in';
import Film from '../pages/film/film';
import MyList from '../pages/my-list/my-list';
import AddReview from '../pages/add-review/add-review';
import Player from '../pages/player/player';
import NotFound from '../pages/not-found/not-found';

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

        <Route path={AppRoute.FILM} exact>
          <Film
            film={promoFilm}
            similarFilms={films}
          />
        </Route>

        <Route path={AppRoute.REVIEW} exact>
          <AddReview
            name={promoFilm.name}
            poster={promoFilm.posterImage}
            backgroundImage={promoFilm.backgroundImage}
          />
        </Route>

        <Route path={AppRoute.MY_LIST} exact>
          <MyList
            films={films}
          />
        </Route>

        <Route path={AppRoute.PLAYER} exact>
          <Player />
        </Route>

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
