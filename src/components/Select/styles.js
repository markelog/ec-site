import { cyan } from '../../variables/colors';

const styles = {
  container: {
    position: 'relative',
  },

  ul: {
    listStyle: 'none',
    lineHeight: '18px',
    fontSize: '14px',
    padding: 0,
    margin: '0 0 0 20px',
  },

  li: {
    position: 'relative',
    padding: 0,
    margin: 0,
  },

  active: {
    color: cyan
  },

  pointer: {
    position: 'absolute',
    left: '-15px',
  }
};

export default styles;
