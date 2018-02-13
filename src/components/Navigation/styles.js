import { dark } from '../../variables/colors';
import { minWidth } from '../../variables/dimensions';

export default {
  ul: `
    position: absolute;
    bottom: 0;
    padding: 5rem 0;
    display: flex;
    justify-content: space-around;
    min-width: ${minWidth};
    width: 100%;
    margin: 0;

    @media (max-width: 500px) {
      flex-direction: column;
      left: 50%;
      transform: translateX(-10%);
      width: auto;
      padding: 3rem 0;
    }
  `,

  li: {
    listStyle: 'none',
    margin: '1rem 0 0',
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
