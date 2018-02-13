import React from 'react';
import PropTypes from 'prop-types';

const Output = props => (<div>{props.children}</div>);

Output.propTypes = {
  children: PropTypes.node
};

Output.displayName = 'Output';

export default Output;
