import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Terminal from '../components/Terminal';
import Command, { Output } from '../components/Command';

class NotFound extends Component {
  static propTypes = {
    location: PropTypes.shape()
  }

  constructor(props) {
    super(props);
    this.parent = null;
  }

  componentDidMount() {
    setTimeout(() => {
      this.parent.focus();
    }, 100);
  }

  render() {
    const input = this.props.location.pathname.split('/').join(' ');

    return (
      <div
        tabIndex="-1"
        style={{ float: 'left', width: '100%' }}
        ref={(parent) => { this.parent = parent; }}
      >
        <Terminal>
          <Command input={input} delay={200}>
            <Output>-bash: {input}: command not found</Output>
          </Command>
        </Terminal>
      </div>
    );
  }
}

export default NotFound;
