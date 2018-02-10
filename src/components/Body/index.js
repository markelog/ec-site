import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Body = props => (
  <main style={styles.container} id="main">
    <div style={styles.sub}>
      {props.children}
    </div>
  </main>
);

Body.propTypes = {
  children: PropTypes.node.isRequired
};

export default Body;
