import React from 'react';

import Navigation from '../Navigation';
import Logo from '../Logo';

import styles from './styles';

const Header = () => {
  return (
    <header style={styles.container}>
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
