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
  	width: 80vh;
    display: inline-block;

		@media only screen
		  and (max-device-width: 760px) {
				width: 40vh;
		}

		/* iPhone X portrait */
		@media only screen
		  and (min-device-width: 375px)
		  and (max-device-width: 812px)
		  and (orientation: portrait) {
				width: 40vh
		}

		/* iPhone X landscape */
		@media only screen
		  and (min-device-width: 375px)
		  and (max-device-width: 812px)
		  and (orientation: landscape) {
				width: 100vh
		}

		/* iPad Pro 10.5 Portrait */
		@media only screen
			and (min-device-width: 834px)
			and (max-device-width: 834px)
			and (orientation: portrait)
			and (-webkit-min-device-pixel-ratio: 2) {
				width: 70vh
		}
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
    font-size: 4rem;
    white-space: nowrap;
    font-weight: 400;
    letter-spacing: 2px;
    color: dark;
    margin: 5rem 0 0;
    display: block !important;
    animation: ${fadein} 3s forwards, ${slide} 3s forwards;

		@media only screen
		  and (max-device-width: 760px) {
				font-size: 1.1rem;
		}

		/* iPhone X portrait */
		@media only screen
			and (min-device-width: 375px)
			and (max-device-width: 812px)
			 {
				font-size: 1.2rem;
		}

		/* iPhone X landscape */
		@media only screen
			and (min-device-width: 375px)
			and (max-device-width: 812px)
			 {
				font-size: 2rem;
		}


  `,
};

export default styles;
