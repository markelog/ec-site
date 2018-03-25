import { dark } from '../../variables/colors';
import { minWidth } from '../../variables/dimensions';

const column = `
  flex-direction: column;
  left: 50%;
  transform: translateX(-10%);
  width: auto;
  padding: 3rem 0;
  bottom: 10vh;
  font-size: 5vw;
`;

const row = `
  font-size: 3.5vw;
  position: absolute;
  bottom: 10vh;
  display: flex;
  justify-content: space-around;
  min-width: ${minWidth};
  width: 100%;
  margin: 0;
  padding: 0;
`;

export default {
  ul: `
    ${row}

    @media only screen
    and (min-device-width : 375px)
    and (max-device-width : 667px)
    and (orientation : portrait) {
      ${column}
    }

    @media only screen
    and (min-device-width : 375px)
    and (max-device-width : 812px)
    and (-webkit-device-pixel-ratio : 3)
    and (orientation : portrait) {
      bottom: 20vh;
    }

    @media only screen
    and (min-device-width : 768px)
    and (max-device-width : 1024px)
    and (orientation : portrait) {
      ${column}
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
