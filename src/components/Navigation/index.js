/* eslint-disable react/jsx-no-bind */

import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import styles from './styles';

const NavLink = styled(Link)`${styles.link}`;
const Ul = styled.ul`${styles.ul}`;

// There is should be a better way, right?!
const isActive = (path, _, pathObject) => pathObject.pathname.includes(path);

const Navigation = () => (
  <Ul id="navigation">
    <li style={styles.li}>
      <NavLink style={styles.a} activeStyle={styles.active} isActive={isActive.bind(null, '/node/')} to="/node/#navigation">
        Node.js
      </NavLink>
    </li>
    <li style={styles.li}>
      <NavLink style={styles.a} activeStyle={styles.active} isActive={isActive.bind(null, '/rust/')} to="/rust/#navigation">
        Rust
      </NavLink>
    </li>
    <li style={styles.li}>
      <NavLink style={styles.a} activeStyle={styles.active} isActive={isActive.bind(null, '/ruby/')} to="/ruby/#navigation">
        Ruby
      </NavLink>
    </li>
    <li style={styles.li}>
      <NavLink style={styles.a} activeStyle={styles.active} isActive={isActive.bind(null, '/go/')} to="/go/#navigation">
        Go
      </NavLink>
    </li>
    <li style={styles.li}>
      <NavLink style={styles.a} activeStyle={styles.active} isActive={isActive.bind(null, '/python/')} to="/python/#navigation">
        Python
      </NavLink>
    </li>
    <li style={styles.li}>
      <NavLink style={styles.a} activeStyle={styles.active} isActive={isActive.bind(null, '/elm/')} to="/elm/#navigation">
        Elm
      </NavLink>
    </li>
  </Ul>
);

export default Navigation;
