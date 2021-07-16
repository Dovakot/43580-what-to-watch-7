import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {createApi} from './services/api';
import {reducer} from './store/reducer';
import {ActionCreator} from './store/actions';
import {fetchFilms, fetchFilmPromo} from './store/api-actions';

import App from './components/app/app';

const api = createApi();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))),
);

Promise
  .all([
    store.dispatch(fetchFilms()),
    store.dispatch(fetchFilmPromo()),
  ])
  .then(() => store.dispatch(ActionCreator.loadData()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
