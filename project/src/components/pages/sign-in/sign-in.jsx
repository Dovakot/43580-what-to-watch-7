import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {AppRoute} from '../../../const';
import {isCheckAuth} from '../../../utils/utils';
import {getUser} from '../../../store/reducers/user-data/selectors';

import Logo from '../../ui/logo/logo';
import PageFooter from '../../ui/page-footer/page-footer';
import PageTitle from '../../ui/page-title/page-title';
import LoginForm from '../../ui/login-form/login-form';
import FormField from '../../ui/login-form/form-field/form-field';
import Spinner from '../../ui/loading/spinner/spinner';

function SignIn() {
  const {authorizationStatus, isAuthorizationProcess} = useSelector(getUser);

  if (isCheckAuth(authorizationStatus)) {
    return <Redirect to={AppRoute.ROOT} />;
  }

  return (
    <div className="user-page">
      {isAuthorizationProcess && <Spinner />}

      <header className="page-header user-page__head">
        <Logo />

        <PageTitle title="Sign in" />
      </header>

      <div className="sign-in user-page__content">
        <LoginForm>
          <FormField
            className="sign-in__input"
            type="email"
            placeholder="Email address"
            name="user-email"
            id="user-email"
            label="Email address"
          />
          <FormField
            className="sign-in__input"
            type="password"
            placeholder="Password"
            name="user-password"
            id="user-password"
            label='Email address'
          />
        </LoginForm>
      </div>

      <PageFooter />
    </div>
  );
}

export default SignIn;
