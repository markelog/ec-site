import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import styles from './styles';

const Out = (props) => {
  const { head, text } = props;
	let indent = +props.indent || 0;

	const nbsps = [];
	for (let i = 0; i < indent; i++) {
		nbsps.push(<i>&nbsp;</i>)
	}
  const textElem = (<span style={styles.text}> {text}</span>);

  return (
    <div style={props.style || {}}>
      <span style={styles.head}>{nbsps}{head}</span>
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
