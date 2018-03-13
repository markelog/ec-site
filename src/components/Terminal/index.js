import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Terminal = props => {
	const attrs = Object.assign({}, props)
	attrs.style = {
		...styles.window, ...attrs.style
	};

	return (<section {...attrs}>
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
  </section>)
};

Terminal.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape(),
};

export default Terminal;
