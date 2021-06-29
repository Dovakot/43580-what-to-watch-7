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
        К сожалению, запрашиваемая страница не найдена. Возможно, вы перешли
        по ссылке, в которой была допущена ошибка, или ресурс был удален.
        Попробуйте начать с <Link to={AppRoute.ROOT}>главной страницы</Link>.
      </p>
    </div>
  );
}

export default NotFound;
