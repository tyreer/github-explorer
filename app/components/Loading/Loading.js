import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Loading extends Component {
  static propTypes = {
    text: PropTypes.string,
    speed: PropTypes.number,
  };

  static defaultProps = {
    text: 'Loading',
    speed: 300,
  };

  state = {
    text: this.props.text,
  };

  componentDidMount() {
    const stopper = `${this.props.text} . .`;
    this.interval = window.setInterval(() => {
      if (this.state.text === stopper) {
        this.setState({
          text: this.props.text,
        });
      } else {
        this.setState(prevState => ({
          text: `${prevState.text} .`,
        }));
      }
    }, this.props.speed);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <p className="Loading">
        {this.state.text}
      </p>
    );
  }
}
