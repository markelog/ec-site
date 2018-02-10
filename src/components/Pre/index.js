import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Pre = (props) => {
  return (<pre
    style={styles.container}
    dangerouslySetInnerHTML={{ __html: props.children }}
  />);
};

Pre.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Pre;
