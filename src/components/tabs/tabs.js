import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import styles from './tabs.module.css';

const Tabs = ({ tabs, restaurantId }) => {
  const [activeTab, setActiveTab] = useState(0);

  const { content } = tabs[activeTab];

  return (
    <>
      <div className={styles.tabs}>
        {tabs.map(({ title }, index) => (
          <NavLink
            key={title}
            to={`/restaurants/${restaurantId}/${title.toLowerCase()}`}
            className={styles.tab}
            activeClassName={styles.active}
            onClick={() => setActiveTab(index)}
          >
            {title}
          </NavLink>
        ))}
      </div>
      {content}
    </>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.element.isRequired,
    }).isRequired
  ).isRequired,
};

export default Tabs;
