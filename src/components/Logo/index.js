import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Octocat from '../Octocat';

import logo from './logo.svg';
import styles from './styles';

const Header = styled.span`${styles.sub}`;
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

    <Header>
      version manager for any language
    </Header>
  </div>
);
