import { keyframes } from 'styled-components';

import { cyan } from '../../variables/colors';

const pulse = keyframes`
{
  10% { content: ' ⠙'; }
  20% { content: ' ⠹'; }
  30% { content: ' ⠸'; }
  40% { content: ' ⠼'; }
  50% { content: ' ⠴'; }
  60% { content: ' ⠦'; }
  70% { content: ' ⠧'; }
  80% { content: ' ⠇'; }
  90% { content: ' ⠏'; }
}
`;

const style = `
  color: red;

  &:after {
    animation: ${pulse} 1s linear infinite;
    display: 'block';
    content: ' ⠋';
    color: ${cyan};
    font-size: '80px';
  }
`;

export default style;
