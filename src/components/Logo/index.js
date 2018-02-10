import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Octocat from '../Octocat';

import logo from './tmp5.png';
import styles from './styles';

const Header = styled.span`${styles.sub}`;

export default () => (
  <div style={styles.container}>
    <Octocat />

    <Link to="#install" style={styles.install}>
      install
    </Link>

    <Link to="#navigation" style={styles.link}>
      <img src={logo} style={styles.logo} alt="eclectica" />
    </Link>

    <Header>
      version manager for any language
    </Header>
  </div>
);
