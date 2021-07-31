import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {PosterModifier} from '../../../const';
import {fetchFilm} from '../../../store/api-actions/api-film-actions/api-film-actions';
import {resetFilmData} from '../../../store/actions/film-actions/film-actions';
import {getFilm} from '../../../store/reducers/film-data/selectors';

import PageHeader from '../../ui/page-header/page-header';
import Preview from '../../ui/film-card/preview/preview';
import Poster from '../../ui/film-card/poster/poster';
import ReviewForm from '../../ui/review-form/review-form';
import PageLoading from '../../ui/loading/page-loading/page-loading';

function AddReview() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const film = useSelector(getFilm);

  useEffect(() => {
    dispatch(fetchFilm(id));

    return () => dispatch(resetFilmData());
  }, [id, dispatch]);

  if (film.isLoading) {
    return <PageLoading {...film} />;
  }

  const {name, posterImage, backgroundImage, backgroundColor} = film.data;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <Preview
          name={name}
          image={backgroundImage}
          bgColor={backgroundColor}
          isReview
        />

        <PageHeader />

        <Poster
          modifier={PosterModifier.SMALL}
          poster={posterImage}
          name={name}
        />
      </div>

      <div className="add-review">
        <ReviewForm id={id} />
      </div>
    </section>
  );
}

export default AddReview;
