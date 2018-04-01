import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Octocat from '../Octocat';
import Slogan from '../Slogan';

import logo from './logo.svg';
import styles from './styles';

const Img = styled.img`${styles.logo}`;
const Ec = styled(Link)`${styles.link}`;

export default () => (
  <div style={styles.container}>
    <Octocat />

    {/* <Link to="/#install" style={styles.install}>
      install
    </Link> */}

    <Ec to="/#main">
      <Img src={logo} alt="eclectica" />
    </Ec>

    <Slogan>
      version manager for any language
    </Slogan>
  </div>
);
