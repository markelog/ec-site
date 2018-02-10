import React from 'react';

import styles from './styles';
import octocat from './octocat.svg';

const Octocat = () => (
  <a
    style={styles.octocat}
    target="_blank"
    href="https://github.com/markelog/eclectica"
    rel="noopener noreferrer"
  >
    <img src={octocat} width="32" height="32" alt="Go to eclectica on github" />
  </a>
);

export default Octocat;
