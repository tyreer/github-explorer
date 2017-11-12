import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class PlayerInput extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;

    this.setState(() => ({
      username: value,
    }));
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(
      this.props.id,
      this.state.username,
    );
  }

  render() {
    return (
      <form className={this.props.className} onSubmit={this.handleSubmit}>
        <label
          className={this.props.labelClass}
          htmlFor="username"
        >{this.props.label}
        </label>
        <input
          className="PlayerInput__input"
          type="text"
          id="username"
          placeholder="github username"
          value={this.state.username}
          autoComplete="off"
          onChange={this.handleChange}
        />
        <button
          className={this.props.buttonClass}
          type="submit"
          disabled={!this.state.username}
        >
          {this.props.buttonText}
        </button>
      </form>
    );
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
  labelClass: PropTypes.string,
  buttonClass: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
};

PlayerInput.defaultProps = {
  label: 'Username',
  className: 'PlayerInput__container',
  buttonText: 'Submit',
  labelClass: 'PlayerInput__header',
};
