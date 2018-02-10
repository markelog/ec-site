import React from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';
import styled from 'styled-components';
import VisibilitySensor from 'react-visibility-sensor';

import Spinner from '../Spinner';

import styles from './styles';

export const Output = props => (<div>{props.children}</div>);

Output.propTypes = {
  children: PropTypes.node
};

export default class Command extends React.Component {
  static propTypes = {
    spinner: PropTypes.bool,
    input: PropTypes.string,
    timeout: PropTypes.number,
    children: PropTypes.node,
  }

  constructor(props) {
    super(props);

    let { children } = props;
    if (Array.isArray(children) === false) {
      children = props.children ? [props.children] : [];
    }

    this.onVisible = (isVisible) => {
      if (this.state.ready || isVisible === false) {
        return;
      }

      this.setState({
        ready: true
      });
    };

    this.spinner = props.spinner || false;
    this.input = props.input;

    this.timeout = props.timeout || 0;

    this.output = children.filter((elem) => {
      return elem.type.name === 'Output';
    });

    this.children = children.filter((elem) => {
      return elem.type.name !== 'Output';
    });

    if (children.length === 0) {
      this.state = {
        done: true,
        typingDone: true,
      };
    }

    this.show = () => {
      this.setState({
        typingDone: true
      });

      setTimeout(() => {
        this.setState({
          done: true
        });
      }, this.timeout);
    };
  }

  state = {
    ready: false,
    done: false,
    typingDone: false,
  }

  getDescendants() {
    let output = null;
    let children = null;

    if (this.output.length > 0) {
      output = (<div style={styles.output}>{this.children}</div>);
      children = (<div style={styles.output}>{this.output}</div>);
    }

    return {
      output,
      children,
    };
  }

  stdout() {
    const data = this.input.split(' ');
    const rest = data.slice(1).join(' ');
    const command = (<span style={styles.command}>{data[0]}</span>);

    if (data[0] === '#') {
      return (<div style={styles.commentStdout}>{this.input}</div>);
    }

    return (<div style={styles.stdout}>{command} {rest}</div>);
  }

  renderMain() {
    if (this.state.ready === false) {
      return <div />;
    }

    const Caret = styled.span`${styles.caret}`;

    const { done } = this.state;
    const { typingDone } = this.state;
    const finished = typingDone && done === false;
    const caret = (<Caret>█</Caret>);

    const { output, children } = this.getDescendants();

    const br = () => {

      // Don't need to show newline if there is no children
      if (this.children.length === 0) {
        return null;
      }

      return <br />;
    };

    return (
      <div style={styles.input}>
        <span style={styles.dollar}>$ </span>
        <Typist
          avgTypingSpeed={200}
          cursor={{ show: false }}
          onTypingDone={this.show}
        >
          <Typist.Delay ms={1000} />
          {this.stdout()}
        </Typist>

        {finished && this.spinner ? <Spinner /> : null}
        {finished ? br() : null}

        {done ? null : caret}

        {done ? children : null}
        {done ? output : null}

        <style dangerouslySetInnerHTML={{
__html: `
         .Typist { display: inline }
       `
}}
        />
      </div>
    );
  }

  render() {
    return (
      <VisibilitySensor onChange={this.onVisible}>
        {this.renderMain()}
      </VisibilitySensor>
    );
  }
}
