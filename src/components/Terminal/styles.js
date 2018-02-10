import 'typeface-roboto/index.css';

import { keyframes } from 'styled-components';

import { grey, dark } from '../../variables/colors';

const styles = {
  window: {
    border: '1px solid #333',
    width: '100%',
    height: '100%',
    minHeight: '375px',
    position: 'relative',
    borderRadius: '5px',
    boxShadow: '1px 2px 5px 0px rgba(0,0,0,0.1)',
    margin: '60px 0',
    float: 'left',
    background: dark
  },

  header: {
    width: '100%',
    height: '36px',
    position: 'absolute',
  },

  body: {
    width: '100%',
    height: '100%',
    paddingBottom: '20px',
    borderRadius: '5px',
    paddingTop: '43px',
    overflow: 'auto',
  },

  input: {
    fontWeight: 600,
    fontSize: '14px',
  },

  console: {
    color: '#fff',
    fontSize: '12px',
    fontFamily: 'Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New, monospace,serif',
    lineHeight: '18px',
    margin: '0 16px',
    textAlign: 'left',
  },

  prompt: {
    color: '#ccc',
  },

  close: {
    background: '#ff5f56',
    left: '13px',
  },

  minimize: {
    backgroundColor: '#ffbd2e',
    left: '33px',
  },

  fullScreen: {
    backgroundColor: '#27c93f',
    left: '53px',
  },

  icon: {
    borderRadius: '50%',
    display: 'inline-block',
    width: '12px',
    height: '12px',
    position: 'absolute',
    top: '52%',
    transform: 'translateY(-50%)',
  },

  title: {
    color: grey,
    fontSize: '12px',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",sans-serif',
    position: 'absolute',
    top: '6px',
    left: '0',
    right: '0',
    textAlign: 'center',
    width: '200px',
    margin: 'auto',
    borderRadius: '4px',
    padding: '4px',
  },

  text: {
    fontSize: '12px',
    fontFamily: 'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif',
    lineHeight: '20px',
    margin: '0',
    whiteSpace: 'pre-wrap',
  },

  output: {
    margin: '0',
    padding: '0',
  },

  end: {
    marginBottom: '10px'
  }
};

styles.close = Object.assign(styles.close, styles.icon);
styles.minimize = Object.assign(styles.minimize, styles.icon);
styles.fullScreen = Object.assign(styles.fullScreen, styles.icon);

const blink = keyframes`
{
  50% { opacity: 0; }
}
`;

styles.caret = `
  animation: ${blink} 1s linear infinite;
`;

export default styles;
