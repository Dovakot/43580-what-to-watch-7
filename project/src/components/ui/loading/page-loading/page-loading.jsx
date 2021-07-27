import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../logo/logo';
import PageFooter from '../../page-footer/page-footer';
import Spinner from '../spinner/spinner';

const ERROR_TEXT_DEFAULT = 'Loading error please reload the page';

function PageLoading({errorText, isError}) {
  return (
    <div className="user-page">
      {!isError && <Spinner />}

      <header className="page-header user-page__head">
        <Logo />
      </header>

      <section className="catalog" style={{ flexGrow: 1 }}>
        <h2 className="visually-hidden">Page loading</h2>

        <h3 className="catalog__title">
          {isError && (errorText || ERROR_TEXT_DEFAULT)}
        </h3>
      </section>

      <PageFooter />
    </div>
  );
}

PageLoading.propTypes = {
  errorText: PropTypes.string,
  isError: PropTypes.bool.isRequired,
};

export default PageLoading;
