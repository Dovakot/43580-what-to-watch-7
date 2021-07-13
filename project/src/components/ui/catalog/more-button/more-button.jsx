import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../../../store/actions';

function MoreButton({onButtonClick}) {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onButtonClick}
      >
        Show more
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onButtonClick() {
    dispatch(ActionCreator.showFilms());
  },
});

MoreButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export {MoreButton};
export default connect(null, mapDispatchToProps)(MoreButton);
