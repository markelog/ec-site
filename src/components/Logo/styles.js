import { white } from '../../variables/colors';

const styles = {
  container: {
    position: 'relative',
    top: '20vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
  },

  link: `
    margin: 0;
    width: 50vw;
    display: inline-block;
  `,

  install: {
    position: 'absolute',
    top: '0',
    right: '15%',
    color: white,
    textDecoration: 'none',
    borderBottom: `1px dashed ${white}`
  },

  logo: `
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  `,
};

export default styles;
