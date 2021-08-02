import React from 'react';
import {useSelector} from 'react-redux';

import {getFilm} from '../../../store/reducers/film-data/selectors';

import Preview from '../film-card/preview/preview';
import Description from '../film-card/description/description';
import Poster from '../film-card/poster/poster';

function PromoFilm() {
  const {
    id,
    name,
    posterImage,
    backgroundImage,
    genre,
    released,
    backgroundColor,
  } = useSelector(getFilm).data;

  return (
    <>
      <Preview
        image={backgroundImage}
        name={name}
        bgColor={backgroundColor}
      />

      <div className="film-card__wrap">
        <div className="film-card__info">
          <Poster
            poster={posterImage}
            name={name}
          />

          <Description
            id={id}
            name={name}
            genre={genre}
            released={released}
          />
        </div>
      </div>
    </>
  );
}

export default PromoFilm;
