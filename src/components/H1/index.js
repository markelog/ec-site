import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const H1 = props => (
  <h1 style={styles.container}>{props.children}</h1>
);

H1.propTypes = {
  children: PropTypes.node.isRequired,
};

export default H1;
