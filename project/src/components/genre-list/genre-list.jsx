import React from 'react';

function GenreList() {
  return (
    <ul className="catalog__genres-list">
      <li className="catalog__genres-item catalog__genres-item--active">
        <a href="#genres" className="catalog__genres-link">
          All genres
        </a>
      </li>
      <li className="catalog__genres-item">
        <a href="#comedies" className="catalog__genres-link">
          Comedies
        </a>
      </li>
      <li className="catalog__genres-item">
        <a href="#crime" className="catalog__genres-link">
          Crime
        </a>
      </li>
      <li className="catalog__genres-item">
        <a href="#documentary" className="catalog__genres-link">
          Documentary
        </a>
      </li>
      <li className="catalog__genres-item">
        <a href="#dramas" className="catalog__genres-link">
          Dramas
        </a>
      </li>
      <li className="catalog__genres-item">
        <a href="#horror" className="catalog__genres-link">
          Horror
        </a>
      </li>
      <li className="catalog__genres-item">
        <a href="#family" className="catalog__genres-link">
          Kids &amp; Family
        </a>
      </li>
      <li className="catalog__genres-item">
        <a href="#romance" className="catalog__genres-link">
          Romance
        </a>
      </li>
      <li className="catalog__genres-item">
        <a href="#sci-fi" className="catalog__genres-link">
          Sci-Fi
        </a>
      </li>
      <li className="catalog__genres-item">
        <a href="#thrillers" className="catalog__genres-link">
          Thrillers
        </a>
      </li>
    </ul>
  );
}

export default GenreList;
