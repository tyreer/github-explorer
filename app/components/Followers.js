import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchPopularRepos } from '../utils/api';
import PlayerInput from './PlayerInput';


export default class Followers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: ''
    };

    this.handleClick = this.handleClick.bind(this);
   }

   handleClick() {
     fetchPopularRepos('JavaScript')
       .then((repos) => {
         this.setState({
           repos: repos
         })
         console.log(this.state.repos);
     });
  }

  render() {
    return (
      <PlayerInput
        id='playerOne'
        label= {this.props.label}
        onSubmit={this.handleClick}
      />
    )
  }
}

Followers.propTypes = {
  label: PropTypes.string.isRequired,
}

Followers.defaultProps = {
  label: `Creep on this user's followers`,
}
