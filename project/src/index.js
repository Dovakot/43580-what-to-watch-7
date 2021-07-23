import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {AuthorizationStatus} from './const';
import {createApi} from './services/api';
import {reducer} from './store/reducer';
import {ActionCreator} from './store/actions';
import {fetchFilms, fetchFilmPromo, checkAuth} from './store/api-actions';
import redirect from './store/middlewares/redirect';

import App from './components/app/app';

const api = createApi(() => store.dispatch(
  ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH),
));

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);

const reportDownloadStatus = (flag) => store.dispatch(ActionCreator.loadData(flag));

store.dispatch(checkAuth());

Promise
  .all([
    store.dispatch(fetchFilms()),
    store.dispatch(fetchFilmPromo()),
  ])
  .then(() => reportDownloadStatus(false))
  .catch(() => reportDownloadStatus(true));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
