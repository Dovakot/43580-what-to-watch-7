import React from 'react';
import {Link} from 'react-router-dom';

import {AppRoute} from '../../../const';
import PageTitle from '../../ui/page-title/page-title';

function NotFound() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <PageTitle title="404" />
      </header>

      <p>
        We are sorry, the page you requested cannot be found.
        The URL may be misspelled or the page you’re looking for is no longer available.
        Return to the <Link to={AppRoute.ROOT}>homepage</Link>.
      </p>
    </div>
  );
}

export default NotFound;
