import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Breadcrumbs from '../film-card/breadcrumbs/breadcrumbs';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';

function PageHeader({isReview}) {
  const headerClass = cn('page-header', {
    'film-card__head': !isReview,
  });

  return (
    <>
      <h1 className="visually-hidden">WTW</h1>

      <header className={headerClass}>
        <Logo />

        {isReview && <Breadcrumbs />}

        <UserBlock />
      </header>
    </>
  );
}

PageHeader.propTypes = {
  isReview: PropTypes.bool,
};

export default PageHeader;
