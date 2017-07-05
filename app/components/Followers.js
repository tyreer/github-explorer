import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    let name = this.state.name;
    let image = this.state.image;

    return (
      <div>
        {!name &&
          <PlayerInput
            id='followed'
            label= {this.props.label}
            onSubmit={this.handleSubmit}
          />
        }

        {image !== null &&
          <PlayerPreview
            avatar={image}
            username={name}>
            <button
              className='reset'>
                Creep
            </button>
            <button
              className='reset'
              onClick={this.handleReset}>
                Nah, reset
            </button>
          </PlayerPreview>
        }

      </div>
    )
  }
}

Followers.propTypes = {
  label: PropTypes.string.isRequired,
}

Followers.defaultProps = {
  label: `Creep on this user's followers`,
}
