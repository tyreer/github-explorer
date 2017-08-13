import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';

export default class Followers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      image: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
   }

   handleSubmit(id, username) {
     this.setState(() => {
       let newState = {};
       newState['name'] = username;
       newState['image'] = `https://github.com/${username}.png?size=200`;
       return newState;
     });
   }

   handleReset() {
    this.setState(() => {
      var newState = {};
      newState['name'] = '';
      newState['image'] = null;
      return newState;
    })
   }

  render() {
    let match = this.props.match;
    let name = this.state.name;
    let image = this.state.image;

    return (
      <div>
        {!name &&
          <div>
            <h1 className='Followers__headline'>CREEP</h1>
            <PlayerInput
              id='followed'
              label= {this.props.label}
              onSubmit={this.handleSubmit}
              className='PlayerInput--single'
              buttonText='BRING THE FOLLOWERS'
              buttonClass='button--creep'
            />
          </div>
        }

        {image !== null &&
          <div>
            <PlayerPreview
              avatar={image}
              username={name}
              className='PlayerPreview'>
              <button
                className='reset'
                onClick={this.handleReset}>
                  Nah, reset
              </button>
            </PlayerPreview>
            <Link
              className='button'
              to={{
                 pathname: match.url + '/results',
                 search: '?username=' + name
               }}>
                Creep
            </Link>
          </div>
        }
      </div>
    )
  }
}

Followers.propTypes = {
  label: PropTypes.string.isRequired,
}

Followers.defaultProps = {
  label: `CREEP`,
}
