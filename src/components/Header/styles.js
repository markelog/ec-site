import { yellow } from '../../variables/colors';
import { width } from '../../variables/dimensions';

export default {
  container: {
    position: 'relative',
    background: yellow,
    minWidth: width,
    flexDirection: 'column',
    height: '100vh',
    minHeight: 500,
  },

  sub: {
    margin: '4rem 0 0',
  },

  header: {
    margin: 0
  },

  link: {
    color: 'white',
    textDecoration: 'none',
  }
};
