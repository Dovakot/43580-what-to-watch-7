import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import cn from 'classnames';

import './page-loading.css';

const errorText = () => (
  <h1>Упс. Что-то пошло не так, попробуйте перезагрузить страницу.</h1>
);

function PageLoading({isLoadingError}) {
  const loadingClass = cn('page-loading',
    {'page-loading--error': isLoadingError},
  );

  return (
    <div className={loadingClass}>
      {isLoadingError && errorText()}
    </div>
  );
}

const mapStateToProps = ({isLoadingError}) => ({
  isLoadingError,
});

PageLoading.propTypes = {
  isLoadingError: PropTypes.bool.isRequired,
};

export {PageLoading};
export default connect(mapStateToProps)(PageLoading);
