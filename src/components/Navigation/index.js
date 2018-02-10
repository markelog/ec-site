/* eslint-disable react/jsx-no-bind */

import React from 'react';
import Link from 'gatsby-link';

import styles from './styles';

// There is should be a better way, right?!
const isActive = (path, _, pathObject) => path === pathObject.pathname;

const Navigation = () => (
  <nav style={styles.container} id="navigation">
    <ul style={styles.ul}>
      <li style={styles.li}>
        <Link style={styles.a} activeStyle={styles.active} isActive={isActive.bind(null, '/node/')} to="/node/#navigation">
          Node.js
        </Link>
      </li>
      <li style={styles.li}>
        <Link style={styles.a} activeStyle={styles.active} isActive={isActive.bind(null, '/rust/')} to="/rust/#navigation">
          Rust
        </Link>
      </li>
      <li style={styles.li}>
        <Link style={styles.a} activeStyle={styles.active} isActive={isActive.bind(null, '/ruby/')} to="/ruby/#navigation">
          Ruby
        </Link>
      </li>
      <li style={styles.li}>
        <Link style={styles.a} activeStyle={styles.active} isActive={isActive.bind(null, '/go/')} to="/go/#navigation">
          Go
        </Link>
      </li>
      <li style={styles.li}>
        <Link style={styles.a} activeStyle={styles.active} isActive={isActive.bind(null, '/python/')} to="/python/#navigation">
          Python
        </Link>
      </li>
      <li style={styles.li}>
        <Link style={styles.a} activeStyle={styles.active} isActive={isActive.bind(null, '/elm/')} to="/elm/#navigation">
          Elm
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
