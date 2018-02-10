import { keyframes } from 'styled-components';

import { cyan, grey } from '../../variables/colors';

const styles = {
  stdout: {
    display: 'inline-block'
  },

  commentStdout: {
    display: 'inline-block',
    color: grey,
  },

  command: {
    color: cyan,
  },

  input: {
    fontSize: 14,
    marginTop: 10
  },

  dollar: {
    fontWeight: 'bold',
  },

  output: {
    fontSize: '14px',
    margin: 0,
    padding: 0,
  },
};

const blink = keyframes`
{
  50% { opacity: 0; }
}
`;

styles.caret = `
  animation: ${blink} 1s linear infinite;
`;

export default styles;
