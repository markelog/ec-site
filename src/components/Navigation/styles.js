import { dark } from '../../variables/colors';
import { minWidth } from '../../variables/dimensions';

export default {
  ul: `
    position: absolute;
    bottom: 100px;
    display: flex;
    justify-content: space-around;
    min-width: ${minWidth};
    width: 100%;
    margin: 0;
		padding: 0;

    @media (max-width: 500px) {
      flex-direction: column;
      left: 50%;
      transform: translateX(-10%);
      width: auto;
      padding: 3rem 0;
			bottom: 2rem;
    }

		/* iPhone X portrait */
		@media only screen
			and (min-device-width: 375px)
			and (max-device-width: 812px)
			and (-webkit-min-device-pixel-ratio: 3)
			and (orientation: portrait) {
				bottom: 6rem
		}

		/* iPhone 6+, 7+ and 8+ */
		@media only screen
		  and (min-device-width: 414px)
		  and (max-device-width: 736px)
		  and (-webkit-min-device-pixel-ratio: 3)
		  and (orientation: portrait) {
				bottom: 4rem
		}
  `,

  li: {
    listStyle: 'none',
    margin: '1rem 0 0 0',
    padding: 0,
  },

  link: `
    &:hover {
      color: ${dark} !important;
    }

    font-size: 3.5vw;
    text-decoration: none;
    color: white;

    @media (max-width: 650px) {
      font-size: 1.5rem;
    }
  `,

  active: {
    color: dark,
  }
};
