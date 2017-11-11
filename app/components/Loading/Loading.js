import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Loading extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text
    };
  }

  componentDidMount() {
    let stopper = `${this.props.text} ...`;
    this.interval = window.setInterval(function () {
      if (this.state.text === stopper) {
        this.setState(function () {
          return {
            text: this.props.text
          }
        })
      } else {
        this.setState(function (prevState) {
          return {
            text: `${prevState.text} .`
          }
        });
      }
    }.bind(this), this.props.speed)
  }

  componentWillUnmount() {
   window.clearInterval(this.interval);
 }

  render() {
   return (
     <p className="Loading">
       {this.state.text}
     </p>
   )
 }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
};

Loading.defaultProps = {
  text: `Loading`,
  speed: 300,
};
