import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Content = props => (
  <div {...props} style={styles.container}>
    {props.children}
  </div>
);

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
