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
        {this.state.followers.map(follower => {
          return (
            <div>
              <h1>
                {follower.data.name}
              </h1>
              <h1>
                {follower.data.bio}
              </h1>
              <h1>
                {follower.data.location}
              </h1>
              <img src={follower.data.avatar_url}/>
            </div>
          )
        })}
        </div>
      )
    }
  }
  }
