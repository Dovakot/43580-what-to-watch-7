import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {fetchFilms, fetchPromoFilm} from '../../../store/api-actions/api-film-actions/api-film-actions';
import {resetMainPageData} from '../../../store/actions/film-actions/film-actions';
import {getFilms, getFilm} from '../../../store/reducers/film-data/selectors';

import PageHeader from '../../ui/page-header/page-header';
import PromoFilm from '../../ui/promo-film/promo-film';
import Catalog from '../../ui/catalog/catalog';
import PageFooter from '../../ui/page-footer/page-footer';
import TextLoading from '../../ui/loading/text-loading/text-loading';
import PageLoading from '../../ui/loading/page-loading/page-loading';

function Main() {
  const dispatch = useDispatch();
  const films = useSelector(getFilms);
  const promoFilm = useSelector(getFilm);

  useEffect(() => {
    dispatch(fetchFilms());
    dispatch(fetchPromoFilm());

    return () => dispatch(resetMainPageData());
  }, [dispatch]);

  if (films.isLoading) {
    return <PageLoading {...films} />;
  }

  return (
    <>
      <section className="film-card">
        <PageHeader />

        {promoFilm.isLoading
          ? <TextLoading {...promoFilm} />
          : <PromoFilm />}
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <Catalog />
        </section>

        <PageFooter />
      </div>
    </>
  );
}

export default Main;
