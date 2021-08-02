import {toast} from 'react-toastify';

import {ApiRoute, MessageText} from '../../../const';
import {redirect} from '../../actions/actions';
import {loadFilmReviews} from '../../actions/review-actions/review-actions';

const fetchFilmReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.REVIEW}/${id}`)
    .then(({data}) => dispatch(loadFilmReviews(data, false)))
    .catch(() => dispatch(loadFilmReviews([], true)))
);

const sendFilmReview = (id, path, data) => (dispatch, _getState, api) => (
  api.post(`${ApiRoute.REVIEW}/${id}`, data)
    .then(() => {
      dispatch(redirect(path));
      toast.success(MessageText.REVIEW_POSTED);
    })
    .catch(() => toast.error(MessageText.REQUEST_FAILED))
);

export {
  fetchFilmReviews,
  sendFilmReview
};
