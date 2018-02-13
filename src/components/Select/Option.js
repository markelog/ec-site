import PropTypes from 'prop-types';

const Option = props => props.children;

Option.propTypes = {
  children: PropTypes.node
};

Option.displayName = 'Option';

export default Option;
