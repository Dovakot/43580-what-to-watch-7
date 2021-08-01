import React, {Children, cloneElement, useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import TabLink from './tab-link/tab-link';

function Tabs({filmId, children}) {
  const tabItems = children.map(({props}) => props.label);

  const [defaultTab] = tabItems;
  const [activeTab, setActiveTab] = useState(defaultTab);

  useEffect(() => () => setActiveTab(defaultTab), [defaultTab]);

  const onActiveTabChange = (currentTab) => currentTab !== activeTab
    && setActiveTab(currentTab);

  const getTabLink = (label) => (
    <TabLink
      key={label}
      filmId={filmId}
      label={label}
      activeTab={activeTab}
      onActiveTabChange={onActiveTabChange}
    />
  );

  const getActiveTabItem = (child) => cloneElement(child, {activeTab});

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabItems.map(getTabLink)}
        </ul>
      </nav>

      {Children.map(children, getActiveTabItem)}
    </div>
  );
}

Tabs.propTypes = {
  label: PropTypes.string,
  filmId: PropTypes.number.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Tabs;
