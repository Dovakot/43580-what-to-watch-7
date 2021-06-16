import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Logo from '../../logo/logo';
import UserBlock from '../../user-block/user-block';

function Preview({image, name, isReview}) {
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

        {isReview && <Breadcrumbs name={name} />}

        <UserBlock />
      </header>
    </>
  );
}

Preview.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isReview: PropTypes.bool,
};

export default Preview;
