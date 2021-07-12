import React from 'react';
import {connect} from 'react-redux';

import filmProp from '../../../props/film-prop';

import Catalog from '../../ui/catalog/catalog';
import PageFooter from '../../ui/page-footer/page-footer';
import Preview from '../../ui/film-card/preview/preview';
import Description from '../../ui/film-card/description/description';
import Poster from '../../ui/film-card/poster/poster';

function Main({
  promoFilm: {id, name, posterImage, backgroundImage, genre, released},
}) {
  return (
    <>
      <section className="film-card">
        <Preview
          id={id}
          image={backgroundImage}
          name={name}
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

const mapStateToProps = ({promoFilm}) => ({
  promoFilm,
});

Main.propTypes = {
  promoFilm: filmProp.isRequired,
};

export {Main};
export default connect(mapStateToProps)(Main);
