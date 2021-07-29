import axios from 'axios';

import {AppRoute} from '../const';
import browserHistory from '../browser-history';

const BACKEND_URL = 'https://7.react.pages.academy/wtw';
const TIMEOUT = 5000;

const ResponseCode = {
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
};

const token = localStorage.getItem('token') ?? '';

const createApi = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: TIMEOUT,
    headers: {
      'x-token': token,
    },
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;
    const {status} = response;

    if (status === ResponseCode.UNAUTHORIZED) {
      onUnauthorized();
    } else if (status === ResponseCode.NOT_FOUND) {
      browserHistory.push(AppRoute.NOT_FOUND);
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export {createApi};
