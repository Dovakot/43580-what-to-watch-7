import {GenreInfo, FilmInfo} from '../const';

const COLUMNS_COUNT = 2;

const filterByFavorites = (films) => films.filter((film) => film.isFavorite);

const getStarsValue = (count) => Array.from({length: count}, (v, i) => count - i);

const setPosterAlt = (name) => `${name} poster`;

const setStarCount = (count) => `star-${count}`;

const getRatingTitle = (value) => FilmInfo.RATINGS
  .find(({rating}) => rating <= value).title;

const getActors = (actors) => actors.length > FilmInfo.MAX_ACTOR_COUNT
  ? `${actors.slice(0, FilmInfo.MAX_ACTOR_COUNT).join(', ')} and other`
  : actors.join(', ');

const getGenresFromFilm = (films) => {
  const genres = new Set(films.map(({genre}) => genre));

  return [GenreInfo.DEFAULT, ...genres].slice(0, GenreInfo.COUNT);
};

const getReviewColCount = (count) => {
  const reviewColCount = {
    left: 0,
    right: 0,
  };

  if (count > 0) {
    reviewColCount.left = Math.round(count / COLUMNS_COUNT);
    reviewColCount.right = count - reviewColCount.left;
  }

  return reviewColCount;
};

export {
  filterByFavorites,
  getStarsValue,
  setPosterAlt,
  setStarCount,
  getRatingTitle,
  getActors,
  getGenresFromFilm,
  getReviewColCount
};
