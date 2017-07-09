import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { getAllFollowersData } from '../utils/api';


export default class FollowerResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: null
    }
  }

  componentDidMount() {
    const followed = queryString.parse(this.props.location.search);

    getAllFollowersData(followed.username)
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
        <div className='column'>
          <h1>{this.state.followers[0].data.bio}</h1>
          <h1>{this.state.followers[1].data.bio}</h1>
          <h1>{this.state.followers[2].data.bio}</h1>
          <h1>{this.state.followers[3].data.bio}</h1>
          <h1>{this.state.followers[4].data.bio}</h1>
          <h1>{this.state.followers[5].data.bio}</h1>
          <h1>{this.state.followers[6].data.bio}</h1>
          <h1>{this.state.followers[7].data.bio}</h1>
          <h1>{this.state.followers[8].data.bio}</h1>
        </div>
      )
    }
  }
  }
