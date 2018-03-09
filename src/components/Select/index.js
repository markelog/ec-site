import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import Out from '../Out';

import styles from './styles';

export { default as Option } from './Option';

export default class Select extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    head: PropTypes.string,
  }

  static pointer = (<span>❯</span>)

  constructor(props) {
    super(props);

    let { children, indent } = props;
    if (Array.isArray(children) === false) {
      children = props.children ? [props.children] : [];
    }

		indent = +indent || 0;

    this.head = this.props.head;
    this.options = children.filter(({ type }) => type.displayName === 'Option');
		this.nbsps = [];
		for (let i = 0; i < +indent + 2; i++) {
			this.nbsps.push(<i key={shortid()}>&nbsp;</i>)
		}
		this.nbspsPointer = this.nbsps.slice(0, -2);

    this.children = this.options
      .filter(elem => elem.props.selected)[0]
      .props.children;
  }

  state = {
    done: false,
    finish: false,
    index: 0,
  }

  componentDidMount() {
    this.start();
  }

  id = NaN;

  start() {
    this.id = setInterval(this.change.bind(this), 500);
  }

  finish(index, done) {
    this.setState({
      index,
      done
    });

    if (done === false) {
      return;
    }

    setTimeout(() => {
      this.setState({
        finish: true,
      });
    }, 500);
  }

  change() {
    if (this.state.done) {
      clearInterval(this.id);
      this.id = NaN;
      return;
    }

    let { index, done } = this.state;

    if (this.options[index].props.selected) {
      this.finish(index, true);

      return;
    }

    index += 1;
    done = this.options[index].props.selected || false;

    this.finish(index, done);
  }

  renderLi() {
    return this.options.map((elem, i) => {
      let data = elem.props.value;
			let a = this.nbspsPointer
			let b = this.nbsps
			let q = this.props

      if (this.state.index === i) {
        data = <span style={styles.active}>{this.nbspsPointer}{Select.pointer} {data}</span>;
      } else {
        data = <span>{this.nbsps}{data}</span>;
      }

      return (<li style={styles.li} key={shortid()}> {data} </li>);
    });
  }

  renderUl() {
    return (
      <div>
        <Out indent={this.props.indent} head={this.head} />
        <ul style={styles.ul}>
          {this.renderLi()}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div style={styles.container}>
        {this.state.finish ? this.children : this.renderUl()}
      </div>
    );
  }
}
