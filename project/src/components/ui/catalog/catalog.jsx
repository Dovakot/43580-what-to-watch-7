import React from 'react';
import {useSelector} from 'react-redux';

import {getGenresFromFilm, filterByGenre, isMoreButton} from '../../../utils/film-util';
import {getFilms, getActiveGenre, getFilmsCounter} from '../../../store/reducers/film-data/selectors';

import Genres from './genres/genres';
import MoreButton from './more-button/more-button';
import FilmList from '../../ui/film-list/film-list';

function Catalog() {
  const films = useSelector(getFilms).data;
  const activeGenre = useSelector(getActiveGenre);
  const filmsCounter = useSelector(getFilmsCounter);

  const filteredFilms = filterByGenre(films, activeGenre).slice(0, filmsCounter);
  const genres = getGenresFromFilm(films);

  return (
    <>
      <Genres genres={genres} />
      <FilmList films={filteredFilms} />

      {isMoreButton(filmsCounter, filteredFilms) && <MoreButton />}
    </>
  );
}

export default Catalog;
