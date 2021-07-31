import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {fetchFavoritesFilms} from '../../../store/api-actions/api-film-actions/api-film-actions';
import {resetFavoritePageData} from '../../../store/actions/film-actions/film-actions';
import {getFavoritesFilms} from '../../../store/reducers/film-data/selectors';

import Logo from '../../ui/logo/logo';
import FilmList from '../../ui/film-list/film-list';
import PageFooter from '../../ui/page-footer/page-footer';
import UserBlock from '../../ui/user-block/user-block';
import PageTitle from '../../ui/page-title/page-title';
import PageLoading from '../../ui/loading/page-loading/page-loading';

function MyList() {
  const dispatch = useDispatch();
  const favoritesFilms = useSelector(getFavoritesFilms);

  useEffect(() => {
    dispatch(fetchFavoritesFilms());

    return () => dispatch(resetFavoritePageData());
  }, [dispatch]);

  if (favoritesFilms.isLoading) {
    return <PageLoading {...favoritesFilms} />;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <PageTitle title="My list" />
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList films={favoritesFilms.data} />
      </section>

      <PageFooter />
    </div>
  );
}

export default MyList;
