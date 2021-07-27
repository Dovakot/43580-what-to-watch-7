import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';

import {DATA_LOADING, PosterModifier} from '../../../const';
import {fetchFilm} from '../../../store/api-actions';

import PageHeader from '../../ui/page-header/page-header';
import Preview from '../../ui/film-card/preview/preview';
import Poster from '../../ui/film-card/poster/poster';
import ReviewForm from '../../ui/review-form/review-form';
import PageLoading from '../../ui/loading/page-loading/page-loading';

function AddReview({name, posterImage, backgroundImage, backgroundColor, loadFilm}) {
  const {id} = useParams();
  const [dataLoading, setDataLoading] = useState(DATA_LOADING);

  const checkDataLoading = (isError = false) => {
    setDataLoading({isLoading: isError, isError});
  };

  useEffect(() => {
    loadFilm(+id)
      .then(() => checkDataLoading())
      .catch(() => checkDataLoading(true));

    return () => setDataLoading(DATA_LOADING);
  }, [id, loadFilm]);

  if (dataLoading.isLoading) {
    return <PageLoading {...dataLoading} />;
  }

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
        <ReviewForm id={+id} />
      </div>
    </section>
  );
}

const mapStateToProps = ({film}) => ({
  name: film.name,
  posterImage: film.posterImage,
  backgroundImage: film.backgroundImage,
  backgroundColor: film.backgroundColor,
});

const mapDispatchToProps = (dispatch) => ({
  loadFilm(id) {
    return dispatch(fetchFilm(id));
  },
});

AddReview.propTypes = {
  name: PropTypes.string,
  posterImage: PropTypes.string,
  backgroundImage: PropTypes.string,
  backgroundColor: PropTypes.string,
  loadFilm: PropTypes.func.isRequired,
};

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
