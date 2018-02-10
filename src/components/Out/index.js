import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Out = (props) => {
  const { head, text } = props;

  const textElem = (<span style={styles.text}> {text}</span>);

  return (
    <div style={props.style || {}}>
      <span style={styles.head}>{head}</span>
      {text ? textElem : null}
    </div>
  );
};

Out.propTypes = {
  style: PropTypes.shape(),
  head: PropTypes.string,
  text: PropTypes.string,
};

export default Out;
