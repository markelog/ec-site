import { dark, white } from '../../variables/colors';

export default {
  container: {
    position: 'absolute',
    bottom: 0,
    padding: '5rem 0',
    width: '100%',
  },

  ul: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    margin: 0,
    padding: 0,
  },

  li: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },

  a: {
    fontSize: '2.5rem',
    textDecoration: 'none',
    color: white,
  },

  active: {
    color: dark,
  }
};
