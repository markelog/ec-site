import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import styles from './styles';

const Wrapper = styled.span`${styles.slogan}`;

// Unplesant workaround for https://github.com/gatsbyjs/gatsby/issues/3067
// Do not render Slogan (or its animation tag in SSR)
const isClient = !!(
  (typeof window !== 'undefined' &&
  window.document && window.document.createElement)
);

const Slogan = (props) => {
  if (isClient === false) {
    return null;
  }

  return <Wrapper>{props.children}</Wrapper>;
};

Slogan.propTypes = {
  children: PropTypes.ArrayOf(PropTypes.node)
};
