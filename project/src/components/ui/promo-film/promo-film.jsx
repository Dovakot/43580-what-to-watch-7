import React from 'react';
import {connect} from 'react-redux';

import filmProp from '../../../props/film-prop';

import PageHeader from '../page-header/page-header';
import Preview from '../film-card/preview/preview';
import Description from '../film-card/description/description';
import Poster from '../film-card/poster/poster';

function PromoFilm({
  promoFilm: {id, name, posterImage, backgroundImage, genre, released, backgroundColor},
}) {
  return (
    <>
      <Preview
        image={backgroundImage}
        name={name}
        bgColor={backgroundColor}
      />

      <PageHeader />

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

const mapStateToProps = ({promoFilm}) => ({
  promoFilm,
});

PromoFilm.propTypes = {
  promoFilm: filmProp.isRequired,
};

export {PromoFilm};
export default connect(mapStateToProps)(PromoFilm);
