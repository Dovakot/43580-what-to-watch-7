import {configureStore} from '@reduxjs/toolkit';

import {AuthorizationStatus} from '../const';
import {rootReducer} from './reducers/root-reducer';
import {createApi} from '../services/api';
import {requireAuthorization} from './actions/user-actions/user-actions';
import redirect from './middlewares/redirect';

const api = createApi(() => store.dispatch(
  requireAuthorization(AuthorizationStatus.NO_AUTH),
));

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

export default store;
