import { keyframes } from 'styled-components';

const fadein = keyframes`
{
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
`;

const slide = keyframes`
{
  from {
    transform: translateY(-45px);
  }

  to {
    transform: translateY(0);
  }
}
`;

export default {
  slogan: `
    font-size: 5vw;
    white-space: nowrap;
    font-weight: 400;
    letter-spacing: 2px;
    color: dark;
    margin: 5rem 0 0;
    display: block !important;
    animation: ${fadein} 2s forwards, ${slide} 2s forwards;
  `,
};
