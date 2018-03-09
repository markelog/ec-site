import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Terminal = props => (
  <div style={{ ...styles.window, ...props.style }} {...props}>
    <div style={styles.header}>
      <span style={styles.close} />
      <span style={styles.minimize} />
      <span style={styles.fullScreen} />
      <div style={styles.title}>bash</div>
    </div>
    <div style={styles.body}>
      <div style={styles.console}>
        {props.children}
      </div>
    </div>
  </div>
);

Terminal.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape(),
};

export default Terminal;
