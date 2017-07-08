import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { getFollowers } from '../utils/api';


export default class FollowerResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: null
    }
  }

  componentDidMount() {
    const followed = queryString.parse(this.props.location.search);

    getFollowers(followed.followed)
    .then(function(data) {
      return this.setState(
        {
          followers: data
        }
      );
    }.bind(this));
  }

  render() {
    if (this.state.followers === null){
      return (
        <div className='row'>
         <h1>Loading</h1>
       </div>
      )
    } else {
      return (
        <div className='row'>
         <h1>{this.state.followers[0].login}</h1>
         <h1>{this.state.followers[1].login}</h1>
         <h1>{this.state.followers[2].login}</h1>
         <h1>{this.state.followers[3].login}</h1>
         <h1>{this.state.followers[4].login}</h1>
       </div>
      )
    }
  }
}
