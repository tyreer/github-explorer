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
   }

   handleSubmit(id, username) {
     this.setState(() => {
       let newState = {};
       newState['name'] = username;
       newState['image'] = `https://github.com/${username}.png?size=200`;
       return newState;
     });
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
