import { dark } from '../../variables/colors';
import { minWidth } from '../../variables/dimensions';

export default {
  ul: `
		font-size: 3.5vw;
    position: absolute;
    bottom: 8vh;
    display: flex;
    justify-content: space-around;
    min-width: ${minWidth};
    width: 100%;
    margin: 0;
		padding: 0;

    @media (max-width: 600px) {
      flex-direction: column;
      left: 50%;
      transform: translateX(-10%);
      width: auto;
      padding: 3rem 0;
			bottom: 10vh;
			font-size: 5vw;
    }

		@media (max-height: 1000px) and
		(max-width: 3000px) {
			bottom: 10vh;
		}

		@media (max-height: 800px) {
			bottom: 16vh;
		}

		@media (max-height: 600px) {
			bottom: 10vh;
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

    text-decoration: none;
    color: white;
  `,

  active: {
    color: dark,
  }
};
