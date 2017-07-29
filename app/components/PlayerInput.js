import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PlayerInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;

    this.setState(() => {
    return {
        username: value
      }
    })
  }

  handleSubmit(event) {
   event.preventDefault();

   this.props.onSubmit(
     this.props.id,
     this.state.username
   );
 }

  render() {
    return (
      <form className={this.props.className} onSubmit={this.handleSubmit}>
        <label className='header' htmlFor='username'>{this.props.label}</label>
        <input
          id='username'
          className='PlayerInput__input'
          placeholder='github username'
          type='text'
          value={this.state.username}
          autoComplete='off'
          onChange={this.handleChange}
        />
        <button
          className='button'
          type='submit'
          disabled={!this.state.username}>
            Submit
        </button>
      </form>
    )
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
}

PlayerInput.defaultProps = {
  label: 'Username',
  className: 'column',
}
