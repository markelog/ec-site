import { keyframes } from 'styled-components';

import { white } from '../../variables/colors';

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

  sub: `
    font-size: 5vw;
    white-space: nowrap;
    font-weight: 400;
    letter-spacing: 2px;
    color: dark;
    margin: 5rem 0 0;
    display: block !important;
    animation: ${fadein} 3s forwards, ${slide} 3s forwards;
  `,
};

export default styles;
