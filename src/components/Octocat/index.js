import React from 'react';
import styled from 'styled-components';

import styles from './styles';
import octocat from './octocat.svg';

const A = styled.a`${styles.octocat}`;

const Octocat = () => (
  <A
    target="_blank"
    href="https://github.com/markelog/eclectica"
    rel="noopener noreferrer"
  >
    <img src={octocat} width="32" height="32" alt="Go to eclectica on github" />
  </A>
);

export default Octocat;
