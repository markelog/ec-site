import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import style from './styles';

const Spin = styled.span`${style}`;

export default class Spinner extends React.Component {
  static propTypes = {
    styles: PropTypes.shape()
  }

  constructor(props) {
    super(props);

    this.styles = props.styles || {};
  }

  render() {
    return <Spin style={this.styles} />;
  }
}
