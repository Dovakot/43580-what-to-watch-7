import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Logo from '../../logo/logo';
import UserBlock from '../../user-block/user-block';

function Preview({id, name, image, isReview}) {
  const headerClass = cn('page-header', {
    'film-card__head': !isReview,
  });

  return (
    <>
      <div className="film-card__bg">
        <img
          src={image}
          alt={name}
        />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className={headerClass}>
        <Logo />

        {isReview && <Breadcrumbs name={name} id={id} />}

        <UserBlock />
      </header>
    </>
  );
}

Preview.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isReview: PropTypes.bool,
};

export default Preview;
