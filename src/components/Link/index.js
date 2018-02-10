import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Link = props => (
  <a href={props.href} target="_blank" style={styles.container}>
    {props.children}
  </a>
);

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string
};

export default Link;
